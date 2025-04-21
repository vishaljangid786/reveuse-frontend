import React from "react";
import ImageSlider from "../components/ImageSlider";
import HomeAbout from "../components/HomeAbout";
import FAQ from "../components/FAQ";
import CompaniesOverview from "../components/CompaniesOverview";
import BlogSlider from "../components/BlogSlider"
import HomeContact from "../components/HomeContact.jsx"
import Services from "./Services.jsx";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      {/* <HomeServices /> */}
      <Services />
      <HomeAbout />
      <CompaniesOverview />
      <FAQ />
      <BlogSlider />
      <HomeContact />
    </div>
  );
};

export default Home;
