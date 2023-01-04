import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [visible, setVisible] = useState("password");
  const handleInputType = () => {
    setVisible((curr) => (curr === "password" ? "text" : "password"));
  };
  return (
    <div className="login-form mx-auto mt-16 box-border h-screen w-full md:w-3/6 lg:w-2/6">
      <form className="rounded-lg bg-slate-50 px-5 py-5 dark:bg-slate-700 md:border lg:border lg:border-slate-400 lg:shadow-lg">
        <h1 className="my-5 text-center text-3xl font-bold text-blue-700 dark:text-secondary lg:text-4xl">
          Please SignIn
        </h1>
        <div className="input-box pt-5">
          <input
            className="w-full rounded-md border bg-transparent py-2 px-4 text-xl focus:border-2 focus:border-blue-700 focus:outline-none dark:focus:border-blue-300 "
            autoComplete="off"
            type="text"
            required
            name="text"
          />
          <label
            htmlFor="text"
            className="input-label pointer-events-none bg-slate-50 dark:bg-slate-700 dark:text-white"
          >
            Email
          </label>
        </div>
        <div className="input-box mt-[-15px]">
          <span
            onClick={handleInputType}
            className="password-show relative top-[2.2rem] right-3 z-10 float-right cursor-pointer"
          >
            {visible === "password" ? (
              <i className="fa-sharp fa-solid fa-eye-slash"></i>
            ) : (
              <i className="fa-solid fa-eye"></i>
            )}
          </span>
          <input
            className="w-full rounded-md border bg-transparent py-2 px-4 text-xl focus:border-2 focus:border-blue-700 focus:outline-none dark:focus:border-blue-300 "
            autoComplete="off"
            type={visible}
            name="password"
            required
          />

          <label
            htmlFor="password"
            className="input-label pointer-events-none bg-slate-50 dark:bg-slate-700 dark:text-white"
          >
            Password
          </label>

          <Link
            className="mt-[-20px] mb-5 block w-32 text-blue-700 hover:underline dark:text-secondary "
            to="forgotPassword"
          >
            forgot password?
          </Link>
        </div>

        <div className="pt-5 pb-10">
          <NavLink
            to="/signUp"
            className="float-left font-bold text-blue-600 hover:text-blue-900 dark:text-secondary dark:hover:text-blue-400"
          >
            Create account
          </NavLink>
          <input
            type="submit"
            className="hover:bg-blue-00 float-right mr-1 rounded bg-primary py-1 px-3 text-white md:mr-10 lg:mr-10  lg:text-2xl"
            value="SignIn"
          />
        </div>
      </form>
      <div className="divider my-5 mx-5">OR</div>

      {/* social sign in section. */}
      <button className="text-md my-3 mx-auto block w-[95%] rounded-lg border-2 bg-slate-100 py-2 font-bold text-slate-700 shadow-md hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:border-secondary dark:hover:bg-slate-600 md:mx-auto md:w-5/6 md:text-2xl lg:mx-auto lg:w-5/6 lg:text-2xl">
        <i className="fa-brands fa-google mx-1 text-2xl md:mx-2 md:text-3xl lg:mx-2 lg:text-3xl"></i>
        CONTINUE WITH GOOGLE
      </button>
      <button className="text-md my-3 mx-auto block w-[95%]  rounded-lg border-2 bg-slate-100 py-2  font-bold text-slate-700 shadow-md hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:border-secondary dark:hover:bg-slate-600 md:mx-auto md:w-5/6 md:text-2xl lg:mx-auto lg:w-5/6 lg:text-2xl">
        <i className="fa-brands fa-facebook mx-1 text-2xl md:mx-2 md:text-3xl lg:mx-2 lg:text-3xl"></i>
        CONTINUE WITH FACEBOOK
      </button>
      <button className="text-md my-3 mx-auto block w-[95%] rounded-lg border-2 bg-slate-100 py-2 font-bold text-slate-700 shadow-md hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:border-secondary dark:hover:bg-slate-600 md:mx-auto md:w-5/6 md:text-2xl lg:mx-auto lg:w-5/6 lg:text-2xl">
        <i className="fa-brands fa-github mx-1 text-2xl md:mx-2 md:text-3xl lg:mx-2 lg:text-3xl"></i>
        CONTINUE WITH GITHUB
      </button>
    </div>
  );
};

export default SignIn;
