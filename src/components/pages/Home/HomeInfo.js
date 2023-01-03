import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const HomeInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-5">
      <div className="card lg:card-side shadow-xl my-6 md:mx-4 lg:mx-4 bg-gradient-to-l from-secondary to-primary ">
        <figure className="w-16 h-18 mx-auto md:mx-5 lg:mx-5 pt-6 md:pt-0 lg:pt-0">
          <img src={clock} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl md:text-3xl lg:text-3xl text-center text-white font-bold lg:text-left">
            Opening Hours
          </h2>
          <p className="text-white text-center lg:text-left">
            SUN-THUS 09:00 AM to 03:00 PM
          </p>
        </div>
      </div>
      <div className="card lg:card-side shadow-xl my-6 md:mx-4 lg:mx-4 bg-accent">
        <figure className="w-16 h-18 mx-auto md:mx-5 lg:mx-5 pt-6 md:pt-0 lg:pt-0">
          <img src={marker} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl md:text-3xl lg:text-3xl text-center text-white font-bold lg:text-left">
            Visit Our Location
          </h2>
          <p className="text-white text-center lg:text-left">
            57 Union Rd Brooklyn, NY 11215
          </p>
        </div>
      </div>
      <div className="card lg:card-side shadow-xl my-6 md:mx-4 lg:mx-4  bg-gradient-to-l from-secondary to-primary ">
        <figure className="w-16 h-18 mx-auto md:mx-5 lg:mx-5 pt-6 md:pt-0 lg:pt-0">
          <img src={phone} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl md:text-3xl lg:text-3xl text-center text-white font-bold lg:text-left">
            Contact Us Now
          </h2>
          <p className="text-white text-center lg:text-left">+90904343</p>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
