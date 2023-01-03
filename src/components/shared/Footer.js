import React from "react";

const Footer = () => {
  return (
    <footer className="pb-5">
      <div className="grid grid-cols1 lg:grid-cols-3 gap-5 justify-items-center">
        <div className="w-full px-10 md:mx-10 lg:mx-10 md:my-10 lg:my-10">
          <h1 className="text-bold my-2">OUR SERVICES</h1>
          <h3>Emergency Checkup</h3>
          <h3>Monthly Checkup</h3>
          <h3>weekly Checkup</h3>
          <h3>Deep Checkup</h3>
        </div>
        <div className="w-full px-10 md:mx-10 lg:mx-10 md:my-10 lg:my-10">
          <h1 className="text-bold my-2">ORAL HEALTH</h1>
          <h3>Emergency Checkup</h3>
          <h3>Monthly Checkup</h3>
          <h3>weekly Checkup</h3>
          <h3>Deep Checkup</h3>
        </div>
        <div className="w-full px-10 md:mx-10 lg:mx-10 md:my-10 lg:my-10">
          <h1 className="text-bold my-2">OUR ADDRESS</h1>
          <h3>New York-1010, Hudison</h3>
        </div>
      </div>
      <h1 className="text-center text-w-full px-10 mt-10 ">
        Copywrite &#169; 2023 All Right Reserved.
      </h1>
    </footer>
  );
};

export default Footer;
