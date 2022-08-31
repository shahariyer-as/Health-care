import React from "react";
import Blog from "../../Blog/Blog";
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
      <Blog></Blog>
    </div>
  );
};

export default Home;
