import React from "react";
import Seo from "../components/Seo";
import Heading from "../components/Heading";
import ServiceList from "../Pages/ServicesList";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Seo
        title="Services – Reveuse Solutions | Custom Web & App Development"
        description="Check out our professional services including web development, mobile apps, cloud solutions, and digital consulting."
        keywords="web development, IT services, cloud consulting, app development, digital solutions"
        url="https://www.thereveuse.com/services"
        image="https://www.thereveuse.com/assets/services.jpg"
      />
      <div data-aos="zoom-in">
        <Heading text1={"All"} text2={"Services"} />
      </div>
      <ServiceList />
    </div>
  );
};

export default Services;
