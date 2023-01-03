import React from "react";
import treatment from "../../../assets/images/treatment.png";

const HomeTreatment = () => {
  return (
    <div className="grid grid-cols-1 justify-between lg:grid-cols-2 my-10 mx-10 lg:px-16 lg:mx-16 lg:my-32 py-10 ">
      <div className="lg:pl-16 lg:ml-10 lg:w-4/6">
        <img src={treatment} alt="Album" className="rounded-md w-full " />
      </div>
      <div className="mx-1 my-6 lg:my-12 lg:pr-10">
        <h2 className="text-2xl text-justify lg:text-4xl">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="text-justify py-2">
          Each tooth consists of a crown and root. The crown is the visible
          white part, and the root is the invisible part of the tooth hidden by
          the gums. The root anchors the tooth into the jawbone. Teeth also
          consist of layers called enamel, dentin, cementum, and dental pulp
        </p>
        <button className="my-5 btn btn-primary font-bold text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomeTreatment;
