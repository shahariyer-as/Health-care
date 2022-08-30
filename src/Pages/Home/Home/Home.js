import React from "react";
import Banner from "../Banner/Banner";
import OurTeam from "../ExtraSection/OurTeam/OurTeam";
import TopSection from "../ExtraSection/TopSec/TopSection";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopSection></TopSection>
      <Services></Services>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
