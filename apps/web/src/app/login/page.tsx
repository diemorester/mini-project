"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorModal from "@/components/errorModal";
import SuccessModal from "@/components/successModal";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    message?: string;
    userName?: string;
    role?: string;
    fullName?: string;
    company?: string;
  }>({});

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSuccessModalVisible(false);
  };

  const loginValidationSchema = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const registerValidationSchema = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number"),
    role: Yup.string().required("Role is required"),
    fullName: Yup.string().when("role", {
      is: "user",
      then: (schema) => schema.required("Full Name is required"),
    }),
    company: Yup.string().when("role", {
      is: "organizer",
      then: (schema) => schema.required("Company Name is required"),
    }),
  });

  const handleLoginSubmit = async (values: any, { resetForm }: any) => {
    const result = {
      email: values.email || "",
      password: values.password || "",
      role: values.role || "",
      fullName: values.fullName || "",
      userName: values.userName || "",
      company: values.company || "",
    };

    try {
      const response = await fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors({
          email: errorData.email || "",
          password: errorData.password || "",
          message: errorData.message || "Login failed",
        });
        setModalVisible(true);
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      SuccessModal({ message: "Login successful", onClose: handleCloseModal });
      setSuccessModalVisible(true);
    } catch (error) {
      console.error("Login error:", error);
      if (error instanceof Error) {
        setErrors({ message: error.message });
      } else {
        setErrors({ message: String(error) });
      }
      setModalVisible(true);
    }
    resetForm();
  };

  const handleRegisterSubmit = async (values: any, { resetForm }: any) => {
    const result = {
      email: values.email || "",
      password: values.password || "",
      role: values.role || "",
      fullName: values.fullName || "",
      userName: values.userName || "",
      company: values.company || "",
    };

    try {
      const response = await fetch("http://localhost:8000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors({
          userName: errorData.userName || "",
          email: errorData.email || "",
          password: errorData.password || "",
          role: errorData.role || "",
          fullName: errorData.fullName || "",
          company: errorData.company || "",
          message: errorData.message || "Registration failed",
        });
        setModalVisible(true);
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();
      SuccessModal({
        message: "Registration successful, Verification email sent",
        onClose: handleCloseModal,
      });
      setSuccessModalVisible(true);
    } catch (error) {
      console.error("Register error:", error);
      if (error instanceof Error) {
        setErrors({ message: error.message });
      } else {
        setErrors({ message: String(error) });
      }
      setModalVisible(true);
    }
    resetForm();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sept-black">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl text-sept-white font-bold">
          {isRegister ? "Register" : "Login"}
        </h1>
        <Formik
          initialValues={{
            userName: "",
            email: "",
            password: "",
            role: "",
            fullName: "",
            company: "",
          }}
          validationSchema={
            isRegister ? registerValidationSchema : loginValidationSchema
          }
          onSubmit={isRegister ? handleRegisterSubmit : handleLoginSubmit}
        >
          {({ errors, values }) => (
            <Form className="flex flex-col items-center justify-center">
              <Field
                type="text"
                name="userName"
                placeholder="Username"
                className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
              />

              {errors.userName && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.userName}
                </div>
              )}

              {isRegister && (
                <>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
                  />

                  {errors.email && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </div>
                  )}
                </>
              )}

              {isRegister && values.role === "user" && (
                <>
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
                  />

                  {errors.fullName && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </div>
                  )}
                </>
              )}

              {isRegister && values.role === "organizer" && (
                <>
                  <Field
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
                  />

                  {errors.company && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.company}
                    </div>
                  )}
                </>
              )}

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
              />

              {errors.password && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.password}
                </div>
              )}

              {isRegister && (
                <>
                  <Field
                    as="select"
                    name="role"
                    className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
                  >
                    <option value=""> --Select Role--</option>
                    <option value="user">User</option>
                    <option value="organizer">Organizer</option>
                  </Field>

                  {errors.role && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.role}
                    </div>
                  )}
                </>
              )}

              <button
                type="submit"
                className="bg-sept-green text-sept-white p-2 m-2"
              >
                {isRegister ? "Register" : "Login"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-4">
          {isRegister ? "Already registered?" : "Not registered?"}
          <button onClick={toggleForm} className="hover:text-sept-green ml-2">
            {isRegister ? "Login Here" : "Register Here"}
          </button>
        </div>

        {modalVisible && (
          <ErrorModal errors={errors} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}
