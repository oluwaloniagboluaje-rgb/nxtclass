"use client"
import React, { ChangeEvent, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import { registerUser } from '../actions/user.actions'
import { User } from "../types";

const validationSchema = Yup.object({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
})

const Page = () => {
  const router = useRouter()

  const [User, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(e.target.name);

    const { name, value } = e.target

    setUser({
      ...User,
      [name]: value
    });
  }

  const submitForm = async (User: User) => {
    console.log(User);
    console.log(User);
    await registerUser(User)
    console.log("i am working");
  }

  const formik = useFormik<User>({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      await submitForm(values)
      // router.push("/login")
    }
  })

  return (
    <div className="flex h-screen justify-center items-center px-5">
      <div className="bg-gray-100 shadow-lg rounded-sm p-10 w-full md:w-1/2 xl:w-1/3 flex-col gap-4 flex justify-center /items-center">
        <h1 className="text-center text-2xl font-bold">Register Here</h1>

        <div>
          <label htmlFor="firstname">First Name:</label>
          <br />
          <input
            type="text"
            name="firstname"
            className="border /outline-1 /focus:outline-green-700 p-2 w-full rounded-sm"
            onChange={(e) => { handleChange(e); formik.handleChange(e) }}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.firstname}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastname">Last Name</label>
          <br />
          <input
            type="text"
            name="lastname"
            className="border /outline-1 /focus:outline-green-700 p-2 w-full rounded-sm"
            onChange={(e) => { handleChange(e); formik.handleChange(e) }}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
          {formik.touched.lastname && formik.errors.lastname && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.lastname}</p>
          )}
        </div>

        <div>
          <label htmlFor="Email">Email:</label>
          <br />
          <input
            type="text"
            name="email"
            className="border /outline-1 /focus:outline-green-700 p-2 w-full rounded-sm"
            onChange={(e) => { handleChange(e); formik.handleChange(e) }}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="Password">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            className="border /outline-1 /focus:outline-green-700 p-2 w-full rounded-sm"
            onChange={(e) => { handleChange(e); formik.handleChange(e) }}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
          )}
        </div>

        <button
          onClick={() => formik.handleSubmit()}
          disabled={formik.isSubmitting}
          className="py-2 bg-black text-white rounded-sm /hover:bg-green-800 sm:/hover:bg-red-800 md:/hover:bg-blue-800 hover:/cursor-pointer /hover:-translate-y-1 transition delay-150 /hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {formik.isSubmitting && (
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          )}
          {formik.isSubmitting ? "Registering..." : "Register"}
        </button>
      </div>
    </div>
  );
};

export default Page;