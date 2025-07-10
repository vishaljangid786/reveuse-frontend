import React, { useEffect, lazy, Suspense } from "react";
import ImageSlider from "../components/ImageSlider";
import HomeAbout from "../components/HomeAbout";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesList from "./ServicesList.jsx";
import Heading from "../components/Heading.jsx";
import LazyLoad from "../components/LazyLoad";

// Lazy load heavy below-the-fold components
const CompaniesOverview = lazy(() => import("../components/CompaniesOverview"));
const TabSlider = lazy(() => import("../components/TabSlider.jsx"));
const ServicePortfolio = lazy(() =>
  import("../components/ServicePortfolio.jsx")
);
const BlogSlider = lazy(() => import("../components/BlogSlider"));

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
      <div className="mt-16 max-w-6xl mx-auto" data-aos="fade-up">
        <Heading text1={"Latest"} text2={"Services"} />
        <ServicesList />
      </div>
      <div className="mt-16" data-aos="fade-up">
        <HomeAbout />
      </div>
      <div className="mt-16" data-aos="fade-up">
        <LazyLoad placeholderHeight="400px">
          <Suspense fallback={<div>Loading...</div>}>
            <CompaniesOverview />
          </Suspense>
        </LazyLoad>
      </div>
      <div className="mt-16" data-aos="fade-up">
        <LazyLoad placeholderHeight="400px">
          <Suspense fallback={<div>Loading...</div>}>
            <TabSlider />
          </Suspense>
        </LazyLoad>
      </div>
      <div className="mt-16" data-aos="zoom-in">
        <LazyLoad placeholderHeight="400px">
          <Suspense fallback={<div>Loading...</div>}>
            <ServicePortfolio />
          </Suspense>
        </LazyLoad>
      </div>
      <div className="mt-16" data-aos="fade-up">
        <LazyLoad placeholderHeight="400px">
          <Suspense fallback={<div>Loading...</div>}>
            <BlogSlider />
          </Suspense>
        </LazyLoad>
      </div>
    </div>
  );
};

export default Home;
