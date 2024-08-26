'use client';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ErrorModal from '@/components/errorModal';
import SuccessModal from '@/components/successModal';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    message?: string;
    username?: string;
    role?: string;
    fullName?: string;
    company?: string;
  }>({});

  const handleCloseModal = () => {
    setModalVisible(false);
    setSuccessModalVisible(false);
  };

  const loginValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLoginSubmit = async (values: any, { resetForm }: any) => {
    const result = {
      email: values.email || '',
      password: values.password || '',
      role: values.role || '',
      fullName: values.fullName || '',
      username: values.username || '',
      company: values.company || '',
    };

    try {
      const response = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors({
          email: errorData.email || '',
          password: errorData.password || '',
          message: errorData.message || 'Login failed',
        });
        setModalVisible(true);
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();

      const token = data.token;
      Cookies.set('token', token);

      if (data.user.isOrganizer) {
        window.location.href = '/organizer/dashboard';
      } else {
        window.location.href = '/profile';
      }
    } catch (error) {
      console.error('Login error:', error);
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
        <h1 className="text-5xl text-sept-white font-bold mb-10">Login</h1>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            role: '',
            fullName: '',
            company: '',
          }}
          validationSchema={loginValidationSchema}
          onSubmit={handleLoginSubmit}
        >
          {({ errors, values }) => (
            <Form className="flex flex-col items-center justify-center">
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="bg-sept-black text-sept-white border-b-2 border-sept-white p-2 m-2"
              />

              {errors.username && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.username}
                </div>
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

              <button
                type="submit"
                className="bg-sept-green text-sept-white p-2 m-2"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
        <div className="text-center flex gap-2 mt-4">
          {'Not registered?'}
          <Link
            href="/register"
            className="hover:text-sept-green transition-all duration-200"
          >
            Register
          </Link>
        </div>

        {modalVisible && (
          <ErrorModal errors={errors} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}
