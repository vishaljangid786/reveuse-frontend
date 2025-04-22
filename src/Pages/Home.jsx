import React, { useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import HomeAbout from "../components/HomeAbout";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQ from "../components/FAQ";
import CompaniesOverview from "../components/CompaniesOverview";
import BlogSlider from "../components/BlogSlider";
import HomeContact from "../components/HomeContact.jsx";
import Services from "./Services.jsx";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div data-aos="zoom-in">
        <ImageSlider />
      </div>
      {/* <HomeServices /> */}
      <div className="mt-16" data-aos="fade-up">
        <Services />
      </div>
      <div className="mt-16" data-aos="fade-up">
        <HomeAbout />
      </div>
      <div className="mt-16" data-aos="fade-up">
        <CompaniesOverview />
      </div>
      <div className="mt-16" data-aos="zoom-in">
        <FAQ />
      </div>
      <div className="mt-16" data-aos="fade-up">
        <BlogSlider />
      </div>
      <div className="mt-16" data-aos="fade-up">
        <HomeContact />
      </div>
    </div>
  );
};

export default Home;
