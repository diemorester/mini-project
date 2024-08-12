"use client";
import React, { useState, useEffect, useRef, ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash, FaDiscord } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoGoogle, IoIosClose } from "react-icons/io";

const initialValues = {
  username: "",
  password: "",
  rememberMe: false,
};

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain letters")
    .matches(/[0-9]/, "Password must contain numbers"),
});

interface ModalSignProps {
  ButtonComponent: ComponentType<{ onClick: () => void }>;
}

export default function ModalSign({ ButtonComponent }: ModalSignProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as HTMLElement)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("overflow-hidden");
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <ButtonComponent onClick={handleToggle} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center h-screen z-20 bg-black bg-opacity-50 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              ref={modalRef}
              className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative flex flex-col z-20 md:flex-row overflow-hidden"
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={handleToggle}
              >
                <IoIosClose size={24} />
              </button>
              <div
                className="relative w-full md:w-1/3 bg-cover bg-center h-40 md:h-auto"
                style={{
                  backgroundImage:
                    'url("https://media.pitchfork.com/photos/60db53e71dfc7ddc9f5086f9/1:1/w_1656,h_1656,c_limit/Olivia-Rodrigo-Sour-Prom.jpg")',
                }}
              />
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-center items-center text-center">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-4">
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Username
                        </label>
                        <Field
                          type="text"
                          name="username"
                          id="username"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <div className="relative">
                          <Field
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="flex items-center">
                        <Field
                          type="checkbox"
                          name="rememberMe"
                          id="rememberMe"
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="rememberMe"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                          disabled={isSubmitting}
                        >
                          Sign In
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              <div className="w-full md:w-1/4 flex flex-col items-center border-l border-dashed border-gray-400 p-4">
                <div className="flex flex-col items-center justify-between h-full py-6">
                  <div className="flex justify-between">
                    <button
                      className={`px-4 py-2 ${
                        isLogin ? "bg-blue-500 text-white" : "bg-gray-200"
                      }`}
                      onClick={() => setIsLogin(true)}
                    >
                      Login
                    </button>
                    <button
                      className={`px-4 py-2 ${
                        !isLogin ? "bg-blue-500 text-white" : "bg-gray-200"
                      }`}
                      onClick={() => setIsLogin(false)}
                    >
                      Register
                    </button>
                  </div>
                  <div className="flex flex-col item-center">
                    <p className="text-gray-400 mt-2">Continue With...</p>
                    <div className="flex gap-4 mt-2 text-black justify-center">
                      <IoLogoGoogle />
                      <TiSocialFacebook />
                      <FaDiscord />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
