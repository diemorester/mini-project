"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "daisyui/dist/full.css";
import ContinueWith from "./continuewith";
import RegisterModal from "./registermodal";

export default function LoginModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <button
        className="btn btn-primary bg-blue-50"
        onClick={() => setIsModalOpen(true)}
      >
        Login
      </button>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <div className="flex flex-row justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Login</h2>
              <button
                className="font-bold"
                onClick={() => setIsModalOpen(false)}
              >
                x
              </button>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-control mb-4">
                <label className="label" htmlFor="username">
                  Username / Email
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500">{formik.errors.username}</div>
                ) : null}
              </div>
              <div className="form-control mb-4">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="form-control mb-4">
                <label className="cursor-pointer label">
                  <span className="label-text">Remember me</span>
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    className="checkbox"
                    onChange={formik.handleChange}
                    checked={formik.values.rememberMe}
                  />
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-full mb-4">
                Login
              </button>
            </form>
            <div className="flex flex-col items-center gap-5 w-full">
              <ContinueWith />
              <div>Forget Password?</div>
              <div className="divider" />
            </div>
          <div className="text-center"> Not registered?
            <RegisterModal />

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
