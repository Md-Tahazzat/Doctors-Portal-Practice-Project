import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="h-screen w-96 mx-auto mt-16 login-form">
      <form className="px-5 py-5 border bg-slate-400 lg:border-slate-500 rounded-lg lg:shadow-lg">
        <h1 className="text-center text-3xl my-5 font-bold text-blue-700">
          Please SignIn
        </h1>
        <div className="input-box my-6">
          <input
            className="py-2 px-4 w-full bg-transparent text-xl border rounded-md focus:outline-none focus:border-2 focus:border-2"
            autoComplete="off"
            type="text"
            required
            name="text"
          />
          <label htmlFor="text" className="input-label dark:text-white">
            Email
          </label>
        </div>
        <div className="input-box my-6">
          <input
            className="py-2 px-4 w-full bg-transparent text-xl border rounded-md focus:outline-none focus:border-2 focus:border-2"
            autoComplete="off"
            type="password"
            name="password"
            required
          />
          <label htmlFor="password" className="input-label dark:text-white">
            Password
          </label>
        </div>
        <button>SignIn</button>
      </form>
    </div>
  );
};

export default SignIn;
