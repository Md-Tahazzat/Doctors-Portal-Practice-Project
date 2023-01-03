import React from "react";

const HomeForm = () => {
  return (
    <div className="bg-slate-700 lg:border-t-2 lg:border-b-2 border-slate-500 py-5 my-20">
      <form>
        <h2 className="text-xl font-bold text-primary text-center mt-5">
          Contact Us
        </h2>
        <h1 className="text-3xl text-white my-2 text-center">
          Stay connected with us
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered dark:text-black w-full max-w-xs block mx-auto mt-6"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input dark:text-black input-bordered w-full max-w-xs block my-3 mx-auto"
        />
        <textarea
          className="textarea dark:text-black block w-full max-w-xs mx-auto"
          placeholder="Your message"
        ></textarea>
        <input
          type="submit"
          className="my-5 btn btn-primary w-80 font-bold text-white block mx-auto"
          value="submit"
        ></input>
      </form>
    </div>
  );
};

export default HomeForm;
