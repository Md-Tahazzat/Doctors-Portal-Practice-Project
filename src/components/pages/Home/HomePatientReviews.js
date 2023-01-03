import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const HomePatientReviews = () => {
  const reviewsInfo = [
    {
      _id: 1,
      name: "Winson Henry",
      address: "Californiya",
      img: people1,
      review:
        "treated first time when I met him in 2008 and the way he followed up. He is not only an Excellent Doctor , he is simple, superb Human being, Sober, approachable, ",
    },
    {
      _id: 2,
      name: "Merry Jane",
      address: "Sydney",
      img: people2,
      review:
        "he is simple, superb Human being, Sober, approachable, a Great Social Worker, friendly approach with smiling face with his selfless service with his selfless services.",
    },
    {
      _id: 3,
      name: "Natasha Ronan",
      address: "New York",
      img: people3,
      review:
        "He is simple, superb Human being, Sober, approachable, a Great Social Worker, friendly approach with smiling face with his selfless service with his selfless services..",
    },
  ];
  return (
    <div className="my-10 mx-10">
      <div className="grid grid-cols-2 justify-between mb-5">
        <div>
          <h1 className="text-primary text-xl">Testimonals</h1>
          <h2 className="text-2xl text-black dark:text-white md:3xl lg:text-4xl my-2">
            What Our Patients Says
          </h2>
        </div>
        <div>
          <img
            src={quote}
            alt="quote"
            className="w-16 lg:w-36 float-right"
          ></img>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-5">
        {reviewsInfo.map((reviewDetails) => (
          <div
            key={reviewDetails._id}
            className="card bg-slate-100 text-black dark:bg-slate-700 dark:text-white shadow-xl"
          >
            <div className="card-body">
              <p>{reviewDetails.review}</p>
            </div>
            <div className="grid grid-cols-2 mx-10 mb-6">
              <img src={reviewDetails.img} alt="img" />
              <div>
                <h1 className="text-xl font-bold">{reviewDetails.name}</h1>
                <p>{reviewDetails.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePatientReviews;
