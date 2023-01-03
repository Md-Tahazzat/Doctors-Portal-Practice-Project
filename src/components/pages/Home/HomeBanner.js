import React from "react";
import chair from "../../../assets/images/chair.png";

const HomeBanner = () => {
  return (
    <div className="bg-slate-50 text-black dark:bg-slate-800 dark:text-white">
      <div className="hero min-h-screen bg-slate-50 text-black dark:bg-slate-800 dark:text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="chair"
            className="mx-10 md:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="my-8 lg:my-0 text-2xl md:text-4xl lg:text-5xl font-bold">
              Your New Smile Starts Here
            </h1>
            <p className="py-6 px-5 text-left">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white font-bold">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
