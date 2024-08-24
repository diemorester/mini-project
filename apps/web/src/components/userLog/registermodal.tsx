"use client";
import React, { useState } from "react";
import "daisyui/dist/full.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [registerData, setRegisterData] = useState({});

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm Password is required"),
    role: Yup.string().required("Role is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setRegisterData(values);
      setIsModalOpen(false);
      setIsGetStartedOpen(true);
    },
  });

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="hover:text-sept-green">
        Register Here
      </button>
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <div className="flex flex-row justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Register</h2>
              <button
                className="font-bold"
                onClick={() => setIsModalOpen(false)}
              >
                x
              </button>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className="input input-bordered w-full mb-4"
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500">{formik.errors.username}</div>
              ) : null}
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="input input-bordered w-full mb-4"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="input input-bordered w-full mb-4"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="input input-bordered w-full mb-4"
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="text-red-500">{formik.errors.confirmPassword}</div>
              ) : null}
              <select
                name="role"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.role}
                className="select select-bordered w-full mb-4"
              >
                <option value="" label="Select role" />
                <option value="organizer" label="Organizer" />
                <option value="user" label="User" />
              </select>
              {formik.touched.role && formik.errors.role ? (
                <div className="text-red-500">{formik.errors.role}</div>
              ) : null}
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      )}
      {isGetStartedOpen && (
        <GetStartedModal
          registerData={registerData}
          onClose={() => setIsGetStartedOpen(false)}
        />
      )}
    </div>
  );
};

const GetStartedModal = ({
  registerData,
  onClose,
}: {
  registerData: any;
  onClose: () => void;
}) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      referralCode: "",
      companyName: "",
      companyAddress: "",
    },
    onSubmit: (values) => {
      const combinedData = { ...registerData, ...values };
      console.log(combinedData);
      onClose();
    },
  });

  return (
    <div className="modal modal-open fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Get Started</h2>
          <button className="font-bold text-xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={formik.handleSubmit}>
          {registerData.role === "organizer" ? (
            <>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                onChange={formik.handleChange}
                value={formik.values.companyName}
                className="input input-bordered w-full mb-4 p-2 border rounded-md"
              />
              <input
                type="text"
                name="companyAddress"
                placeholder="Company Address"
                onChange={formik.handleChange}
                value={formik.values.companyAddress}
                className="input input-bordered w-full mb-4 p-2 border rounded-md"
              />
            </>
          ) : (
            <>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                className="input input-bordered w-full mb-4 p-2 border rounded-md"
              />
              <input
                type="text"
                name="referralCode"
                placeholder="Referral Code"
                onChange={formik.handleChange}
                value={formik.values.referralCode}
                className="input input-bordered w-full mb-4 p-2 border rounded-md"
              />
            </>
          )}
          <button
            type="submit"
            className="btn btn-primary w-full py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;