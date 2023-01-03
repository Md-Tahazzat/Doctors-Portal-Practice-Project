import React from "react";
import doctor from "../../../assets/images/doctor-small.png";

const HomeDoctor = () => {
  return (
    <div className="grid grid-cols-1 bg-slate-700 dark:border-t-2 md:my-60 lg:my-60 dark:border-b-2 border-slate-500 md:grid-cols-2 lg:grid-cols-2 my-5 px-10">
      <div>
        <img
          style={{ marginTop: "-100px" }}
          className="hidden md:block lg:block"
          src={doctor}
          alt="doctor"
        />
      </div>
      <div className="lg:mr-10">
        <h4 className="text-secondary text-xl mt-10">APPOINTMENT</h4>
        <h1 className="text-xl md:text-3xl text-white lg:text-4xl font-bold my-5">
          Make an appointment today
        </h1>
        <p className="text-justify text-white ">
          A surefire way to rectify this situation is to implement medical
          appointment software. Whether you choose an app or a web-based
          platform, it can be a godsend for your staff and patients. No doubt,
          they hate the idea of being packed cheek by jowl in a tiny room when
          the COVID-19 pandemic is raging. Let’s start with the design and
          development of an online doctor appointment booking system and why
          patients expect you to have one. In this article, we’ll show you how
          you can meet their expectations.
        </p>
        <button className="my-5 btn btn-primary font-bold text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomeDoctor;
