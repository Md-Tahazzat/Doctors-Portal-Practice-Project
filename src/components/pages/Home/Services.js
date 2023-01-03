import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
  const homeServices = [
    {
      name: "Fluoride Treatment",
      description:
        "lorem imsum dollar site ammet ipsum dolla ne imsum dollar site ammet ipsum",
      img: fluoride,
    },
    {
      name: "Cavity Filling",
      description:
        "lorem imsum dollar site ammet ipsum dolla ne imsum dollar site ammet ipsum",
      img: cavity,
    },
    {
      name: "Teeth whitening",
      description:
        "lorem imsum dollar site ammet ipsum dolla ne imsum dollar site ammet ipsum",
      img: whitening,
    },
  ];
  return (
    <>
      <h1 className="text-xl font-bold text-primary text-center mt-10">
        SERVICES
      </h1>
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold my-5 dark:text-white text-primary text-center">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-5">
        {homeServices.map((service) => (
          <div className="card max-w-lg my-5 bg-slate-100 lg:mx-5 text-black dark:bg-slate-700 dark:text-white shadow-lg">
            <figure className="px-10 pt-10">
              <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{service.name}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
