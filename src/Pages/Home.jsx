import React, { useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import HomeAbout from "../components/HomeAbout";
import CompaniesOverview from "../components/CompaniesOverview";
import BlogSlider from "../components/BlogSlider";
import ServicesList from "./ServicesList.jsx";
import Heading from "../components/Heading.jsx";
import ServicePortfolio from "../components/ServicePortfolio.jsx";
import TabSlider from "../components/TabSlider.jsx";
import Lenis from "lenis";
import HomeIntro from "../components/HomeIntro.jsx";
import { motion } from "framer-motion";

// Common animation wrapper
const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}>
    {children}
  </motion.div>
);

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Clean up
  }, []);

  return (
    <div>
      <Reveal>
        <ImageSlider />
      </Reveal>

      <Reveal delay={0.1}>
        <HomeIntro />
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-16 max-w-6xl mx-auto">
          <Heading text1={"Latest"} text2={"Services"} />
          <ServicesList />
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-16">
          <HomeAbout />
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mt-16">
          <CompaniesOverview />
        </div>
      </Reveal>

      <Reveal delay={0.5}>
        <div className="mt-16">
          <TabSlider />
        </div>
      </Reveal>

      <Reveal delay={0.6}>
        <div className="mt-16">
          <ServicePortfolio />
        </div>
      </Reveal>

      <Reveal delay={0.7}>
        <div className="mt-16">
          <BlogSlider />
        </div>
      </Reveal>
    </div>
  );
};

export default Home;
