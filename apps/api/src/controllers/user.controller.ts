import { Request, Response } from "express";
import prisma from "@/prisma";
import { hash, genSalt, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import fs from "fs";
import handlebars from "handlebars";
import path from "path";
import { transporter } from "@/helpers/nodemailer";

// Helper function to generate a referral number
const generateReferralNumber = async (): Promise<string> => {
  return Math.random().toString(36).substring(2, 15).toUpperCase();
};

export class UserController {
  async userRegister(req: Request, res: Response) {
    try {
      const { role, userName, email, password, fullName, company } = req.body;

      // Check required fields
      if (!role || !userName || !email || !password) {
        return res.status(400).json({
          status: "error",
          message:
            "Missing required fields: role, userName, email, and password are mandatory.",
        });
      }

      // Check role-specific fields
      if (role === "user" && !fullName) {
        return res.status(400).json({
          status: "error",
          message: "Full name is required for users.",
        });
      } else if (role === "organizer" && !company) {
        return res.status(400).json({
          status: "error",
          message: "Company name is required for organizers.",
        });
      }

      // Check if email or username already exists
      const existingEmail = await prisma.user.findUnique({ where: { email } });
      if (existingEmail) {
        return res.status(400).json({
          status: "error",
          message: "This email is already in use.",
        });
      }

      const existingUsername = await prisma.user.findUnique({
        where: { username: userName },
      });
      if (existingUsername) {
        return res.status(400).json({
          status: "error",
          message: "This username is already in use.",
        });
      }

      // Hash password
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);

      // Create user in the database
      const createdUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          fullName: role === "user" ? fullName! : undefined,
          company: role === "organizer" ? company! : undefined,
          isOrganizer: role === "organizer",
          username: userName,
        },
      });

      // Generate JWT token
      const payload = { id: createdUser.id };
      const token = sign(payload, process.env.KEY_JWT!, { expiresIn: "1h" });
      const link = `http://localhost:3000/verify/activate/${token}`;

      // Send verification email
      const templatePath = path.join(
        __dirname,
        "../templates",
        "register.html"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({
        name: createdUser.fullName || createdUser.company,
        link,
      });

      await transporter.sendMail({
        from: process.env.MAIL_USER!,
        to: createdUser.email,
        subject:
          role === "organizer" ? "Verify as Organizer" : "Verify as User",
        html,
      });

      res.status(201).json({ user: createdUser, link });
    } catch (err) {
      console.error("Error in userRegister:", err);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error." });
    }
  }
  async userActivate(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        console.log("User ID is missing");
        return res
          .status(400)
          .json({ status: "error", message: "User ID is missing" });
      }
  
      console.log("Activating user with ID:", userId);
  
      // Activate the user
      const activateUser = await prisma.user.update({
        where: { id: userId },
        data: { isActive: true },
      });
  
      console.log("User activated:", activateUser);
  
      // Check if the user is an organizer
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { isOrganizer: true },
      });
  
      if (user?.isOrganizer) {
        console.log("User is an organizer");
        return res
          .status(200)
          .json({ status: "ok", message: "Organizer activated successfully" });
      } else {
        console.log("User is not an organizer, handling referral logic");
  
        // Handle referral logic
        let referralCode = "";
        const existingReferral = await prisma.referral.findUnique({
          where: { userId },
        });
  
        if (!existingReferral) {
          referralCode = await generateReferralNumber();
          await prisma.referral.create({
            data: { referralCode, userId },
          });
          console.log("Referral code generated and saved:", referralCode);
        } else {
          referralCode = existingReferral.referralCode;
          console.log(
            "Referral code already exists for user:",
            referralCode
          );
        }
  
        if (req.user?.referral) {
          console.log("User has a referral code:", req.user.referral);
          const referrer = await prisma.referral.findUnique({
            where: { referralCode: req.user.referral },
          });
  
          if (!referrer) {
            console.log("Invalid referral code");
            return res
              .status(400)
              .json({ status: "error", message: "Invalid referral code" });
          }
  
          console.log("Valid referral code, awarding points and discount");
          await Promise.all([
            prisma.points.create({
              data: {
                amount: 10000, // Points awarded to referrer
                expirationDate: new Date(
                  Date.now() + 3 * 30 * 24 * 60 * 60 * 1000 // 3 months expiration
                ),
                userId: referrer.userId,
              },
            }),
            prisma.discount.create({
              data: {
                discount: 10, // Discount for the new user
                expirationDate: new Date(
                  Date.now() + 3 * 30 * 24 * 60 * 60 * 1000 // 3 months expiration
                ),
                userId: userId,
              },
            }),
          ]);
        }
  
        console.log("User activated successfully with referral logic");
        return res.status(200).json({
          status: "ok",
          message: "User activated successfully",
          referralCode,
        });
      }
    } catch (err) {
      console.error("Error in userActivate:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Internal server error." });
    }
  }
  

  async userLogin(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      if (!data || !password) {
        return res.status(400).json({
          status: "error",
          message: "Email/Username and password are required.",
        });
      }

      const user = await prisma.user.findFirst({
        where: { OR: [{ username: data }, { email: data }] },
      });

      if (!user)
        return res
          .status(400)
          .json({ status: "error", message: "User not found!" });
      if (!user.isActive)
        return res
          .status(400)
          .json({ status: "error", message: "User not active" });

      const isValidPass = await compare(password, user.password);
      if (!isValidPass)
        return res
          .status(400)
          .json({ status: "error", message: "Wrong password!" });

      const payload = { id: user.id, isOrganizer: user.isOrganizer };
      const token = sign(payload, process.env.KEY_JWT!, { expiresIn: "1h" });

      res.status(200).json({ status: "ok", user, token });
    } catch (err) {
      console.error("Error in userLogin:", err);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error." });
    }
  }

  async keepLogin(req: Request, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user?.id },
        select: { id: true, username: true, isOrganizer: true },
      });

      if (!user)
        return res
          .status(400)
          .json({ status: "error", message: "User not found." });

      res.status(200).json(user);
    } catch (err) {
      console.error("Error in keepLogin:", err);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error." });
    }
  }

  async userProfile(req: Request, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user?.id },
        select: {
          id: true,
          username: true,
          isOrganizer: true,
          referral: true,
          image: true,
          email: true,
          points: true,
          discounts: true,
          events: true,
        },
      });

      if (!user)
        return res
          .status(400)
          .json({ status: "error", message: "User not found." });

      res.status(200).json(user);
    } catch (err) {
      console.error("Error in userProfile:", err);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error." });
    }
  }

  async userUpdate(req: Request, res: Response) {
    try {
      const { email, username } = req.body;
      const user = await prisma.user.findUnique({
        where: { id: req.user?.id },
      });

      if (!user)
        return res
          .status(400)
          .json({ status: "error", message: "User not found." });

      let newPath = req.file
        ? await this.handleFileUpload(req.file)
        : user.image;

      if (email && email !== user.email) {
        const existingEmail = await prisma.user.findUnique({
          where: { email },
        });
        if (existingEmail)
          return res.status(400).json({
            status: "error",
            message: "This email is already in use.",
          });

        const payload = { id: user.id, email };
        const token = sign(payload, process.env.KEY_JWT!, { expiresIn: "1h" });
        const link = `http://localhost:3000/verify/update_email/${token}`;
        const templatePath = path.join(
          __dirname,
          "../templates",
          "updateEmail.html"
        );
        const templateSource = fs.readFileSync(templatePath, "utf-8");
        const compiledTemplate = handlebars.compile(templateSource);
        const html = compiledTemplate({ name: user.username, link });

        await transporter.sendMail({
          from: process.env.MAIL_USER!,
          to: email,
          subject: "Update email confirmation",
          html,
        });

        return res.status(200).json({ status: "update email", email });
      } else {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            username: username || user.username,
            image: newPath,
          },
        });
        res.status(200).json({ status: "user updated" });
      }
    } catch (err) {
      console.error("Error in userUpdate:", err);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error." });
    }
  }

  async updateEmail(req: Request, res: Response) {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email: req.body.email },
      });
      if (existingUser)
        return res.status(400).json({
          status: "error",
          message: "Email has been used with another account",
        });

      await prisma.user.update({
        where: { id: req.user?.id },
        data: { email: req.body.email },
      });

      res.status(200).json({ status: "ok", message: "Update Email Success" });
    } catch (err) {
      console.error("Error in updateEmail:", err);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error." });
    }
  }

  async resetPassword(req: Request, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: req.body.email },
      });
      if (!user)
        return res
          .status(400)
          .json({ status: "error", message: "Account not found" });

      const payload = { id: user.id, email: user.email };
      const token = sign(payload, process.env.KEY_JWT!, { expiresIn: "1h" });
      const link = `http://localhost:3000/verify/forget_password/update/${token}`;
      const templatePath = path.join(
        __dirname,
        "../templates",
        "resetPassword.html"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ name: user.username, link });

      await transporter.sendMail({
        from: process.env.MAIL_USER!,
        to: req.body.email,
        subject: "Reset password confirmation",
        html,
      });

      res.status(200).json({ status: "ok", message: "Email sent" });
    } catch (err) {
      console.error("Error in resetPassword:", err);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error." });
    }
  }

  async updatePassword(req: Request, res: Response) {
    try {
      const { password, confirm } = req.body;
      if (password !== confirm)
        return res
          .status(400)
          .json({ status: "error", message: "Passwords do not match." });

      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);

      await prisma.user.update({
        where: { email: req.user?.email },
        data: { password: hashedPassword },
      });

      res.status(200).json({ status: "ok", message: "Password updated" });
    } catch (err) {
      console.error("Error in updatePassword:", err);
      res
        .status(500)
        .json({ status: "error", message: "Internal server error." });
    }
  }

  private handleFileUpload(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const { originalname, path: tempPath } = file;
      const ext = originalname.split(".").pop();
      const newPath = path.join(tempPath, `.${ext}`);

      fs.rename(tempPath, newPath, (err) => {
        if (err) return reject(err);
        resolve(newPath);
      });
    });
  }
}
