import React from "react";
import Footer from "../../shared/Footer";
import HomeBanner from "./HomeBanner";
import HomeDoctor from "./HomeDoctor";
import HomeForm from "./HomeForm";
import HomeInfo from "./HomeInfo";
import HomePatientReviews from "./HomePatientReviews";
import HomeTreatment from "./HomeTreatment";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <HomeInfo></HomeInfo>
      <Services></Services>
      <HomeTreatment></HomeTreatment>
      <HomeDoctor></HomeDoctor>
      <HomePatientReviews></HomePatientReviews>
      <HomeForm></HomeForm>
      <Footer></Footer>
    </>
  );
};

export default Home;
