import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="h-screen w-full md:w-3/6 lg:w-2/6 mx-auto mt-16 login-form">
      <form className="px-5 py-5 md:border lg:border bg-slate-50 dark:bg-slate-700 lg:border-slate-400 rounded-lg lg:shadow-lg">
        <h1 className="text-center text-3xl lg:text-4xl my-5 font-bold text-blue-700 dark:text-secondary">
          Please SignIn
        </h1>
        <div className="input-box pt-5">
          <input
            className="py-2 px-4 w-full bg-transparent focus:border-2 focus:border-blue-700 dark:focus:border-blue-300 text-xl border rounded-md focus:outline-none "
            autoComplete="off"
            type="text"
            required
            name="text"
          />
          <label
            htmlFor="text"
            className="input-label bg-slate-50 dark:bg-slate-700 dark:text-white"
          >
            Email
          </label>
        </div>
        <div className="input-box">
          <input
            className="py-2 px-4 w-full bg-transparent focus:border-2 focus:border-blue-700 dark:focus:border-blue-300 text-xl border rounded-md focus:outline-none "
            autoComplete="off"
            type="password"
            name="password"
            required
          />
          <label
            htmlFor="password"
            className="input-label bg-slate-50 dark:bg-slate-700 dark:text-white"
          >
            Password
          </label>
          <Link
            className="block mt-[-20px] w-32 mb-5 text-blue-700 dark:text-secondary hover:underline "
            to="forgotPassword"
          >
            forgot password?
          </Link>
        </div>

        <div className="pt-5 pb-10">
          <NavLink
            to="/register"
            className="float-left font-bold text-blue-600 hover:text-blue-900 dark:text-secondary dark:hover:text-blue-400"
          >
            Create account
          </NavLink>
          <input
            type="submit"
            className="float-right mr-10 py-1 px-3 bg-blue-500 rounded text-white hover:bg-blue-600 lg:text-2xl"
            value="SignIn"
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
