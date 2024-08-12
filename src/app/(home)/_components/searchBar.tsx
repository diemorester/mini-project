"use client";
import React from "react";
import { useFormik } from "formik";

export default function SearchBar() {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      console.log("Search:", values.search);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="relative">
      <input
        type="search"
        name="search"
        placeholder="[&nbsp;&nbsp;Search Everything &nbsp; . &nbsp; . &nbsp; .  &emsp; &emsp; &emsp; &emsp; &emsp; ]"
        className="w-full h-[69px] sm:h-[150px] bg-sept-green text-5xl text-center px-6 focus:bg-sept-purple outline-none focus:placeholder-transparent capitalize font-bold placeholder-sept-white text-white"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.search}
      />
    </form>
  );
}