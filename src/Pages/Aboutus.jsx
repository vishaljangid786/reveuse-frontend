import React, { useEffect } from "react";
import HomeContact from "../components/HomeContact";
import Heading from "../components/Heading";
import MeetTeam from "../components/MeetTeam";

const Aboutus = () => {
  return (
    <>
      <div className="bg-gray-50 mulish min-h-screen px-6 py-12 md:px-20 lg:px-32 font-sans">
        {/* Page Heading */}
        <div className="text-center mb-16">
          <Heading text1="The Story" text2="of Reveuse" />
        </div>

        {/* Mission Statement */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-16 transition hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Reveuse, our mission is to enhance your lifestyle through
            premium, personalized services. With a deep focus on quality and
            care, we are dedicated to delivering bespoke solutions that align
            with your goals. Every client engagement is built on trust,
            attention, and excellence.
          </p>
        </div>

        {/* Banner Image */}
        <div className="mb-16">
          <img
            loading="lazy"
            src={
              "https://res.cloudinary.com/djvxynk2f/image/upload/v1748309287/img9_apuxak.webp"
            }
            alt="About Reveuse"
            className="w-full h-[500px] object-cover rounded-xl shadow-md"
          />
          <p className="text-sm text-gray-500 mt-2 text-right">
            Image by Annie Spratt
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-16 transition hover:shadow-2xl">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg ">
            Our vision is to become a globally recognized outsourcing partner
            known for innovation, excellence, and trust. We aspire to set new
            benchmarks in service delivery by empowering businesses with
            cutting-edge digital solutions and long-term strategic value. At
            Reveuse, we see the future not as a challenge—but as an opportunity
            to lead.
          </p>
        </div>

        {/* Inspirational Quote */}
        <div className="bg-blue-50 rounded-xl p-6 my-12 text-center shadow-md">
          <p className="text-xl italic text-blue-800">
            "Excellence is not an act, but a habit. At Reveuse, we live by it."
          </p>
        </div>

        {/* Meet the Team */}
        <MeetTeam />
      </div>

      {/* Contact CTA */}
      <div className="mt-16">
        <HomeContact />
      </div>
    </>
  );
};

export default Aboutus;
