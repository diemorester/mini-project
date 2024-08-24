"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const loginValidationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const registerValidationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
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
    FullName: Yup.string().when("role", {
      is: "Fans",
      then: (schema) => schema.required("Full Name is required"),
    }),
    OrganizationName: Yup.string().when("role", {
      is: "Organizer",
      then: (schema) => schema.required("Organization Name is required"),
    }),
  });

  const handleLoginSubmit = (values: any, { resetForm }: any) => {
    console.log("Login values:", values);
    resetForm();
  };

  const handleRegisterSubmit = (values: any, { resetForm }: any) => {
    console.log("Register values:", values);
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
            username: "",
            email: "",
            password: "",
            role: "",
            FullName: "",
            OrganizationName: "",
          }}
          validationSchema={
            isRegister ? registerValidationSchema : loginValidationSchema
          }
          onSubmit={isRegister ? handleRegisterSubmit : handleLoginSubmit}
        >
          {({ values }) => (
            <Form className="flex flex-col items-center justify-center">
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
              {isRegister && (
                <>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </>
              )}

              {isRegister && values.role === "Fans" && (
                <>
                  <Field
                    type="text"
                    name="FullName"
                    placeholder="Full Name"
                    className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
                  />
                  <ErrorMessage
                    name="FullName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </>
              )}

              {isRegister && values.role === "Organizer" && (
                <>
                  <Field
                    type="text"
                    name="OrganizationName"
                    placeholder="Organization Name"
                    className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
                  />
                  <ErrorMessage
                    name="OrganizationName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </>
              )}

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
              {isRegister && (
                <>
                  <Field
                    as="select"
                    name="role"
                    className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
                  >
                    <option value=""> --Select Role--</option>
                    <option value="Fans">Fans</option>
                    <option value="Organizer">Organizer</option>
                  </Field>
                  <ErrorMessage
                    name="role"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
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
      </div>
    </div>
  );
}
