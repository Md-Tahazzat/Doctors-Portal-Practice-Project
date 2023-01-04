import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="login-form mx-auto mt-8 h-screen w-full md:w-3/6 lg:w-2/6">
      <form className="rounded-lg bg-slate-50 px-5 py-5 dark:bg-slate-700 md:border lg:border lg:border-slate-400 lg:shadow-lg">
        <h1 className="my-5 text-center text-3xl font-bold text-blue-700 dark:text-secondary lg:text-4xl">
          Please SignUp
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
            className="input-label bg-slate-50 dark:bg-slate-700 dark:text-white"
          >
            Email
          </label>
        </div>
        <div className="input-box">
          <input
            className="w-full rounded-md border bg-transparent py-2 px-4 text-xl focus:border-2 focus:border-blue-700 focus:outline-none dark:focus:border-blue-300 "
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
        </div>
        <div className="input-box">
          <input
            className="w-full rounded-md border bg-transparent py-2 px-4 text-xl focus:border-2 focus:border-blue-700 focus:outline-none dark:focus:border-blue-300 "
            autoComplete="off"
            type="password"
            name="confirm-password"
            required
          />
          <label
            htmlFor="confirm-password"
            className="input-label bg-slate-50 dark:bg-slate-700 dark:text-white"
          >
            Confirm Password
          </label>
        </div>

        <div className="pt-5 pb-10">
          <span className="float-left">Already have an account?</span>
          <NavLink
            to="/signIn"
            className="mx-2 font-bold text-blue-600 hover:text-blue-900 dark:text-primary dark:hover:text-blue-400"
          >
            SignIn
          </NavLink>
          <input
            type="submit"
            className="hover:bg-blue-00 float-right mr-1 rounded bg-primary py-1 px-3 text-white md:mr-10 lg:mr-10  lg:text-2xl"
            value="SignUp"
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

export default SignUp;
