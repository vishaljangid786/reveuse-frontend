import React, { useEffect } from "react";
import HomeContact from "../components/HomeContact";
import Heading from "../components/Heading";
import MeetTeam from "../components/MeetTeam";

const Aboutus = () => {
  return (
    <>
      <section className="bg-gray-50 mulish min-h-screen px-6 py-12 md:px-20 lg:px-32 font-sans">
        {/* Page Heading */}
        <div className="text-center mb-20">
          <Heading text1="The Story" text2="of Reveuse" />
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover the heart of Reveuse Solutions — where innovation meets
            impact.
          </p>
        </div>

        {/* Our Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to empower individuals and businesses by delivering
              personalized, premium-quality services that redefine excellence.
              We are committed to understanding your unique goals and crafting
              solutions that are not only effective but also elevate your
              everyday experiences.
              <br />
              <br />
              Rooted in trust, innovation, and attention to detail, we strive to
              be your trusted partner in creating lasting value and meaningful
              impact. Our approach blends cutting-edge technology with human
              insight to deliver scalable, efficient, and future-ready
              solutions.
              <br />
              <br />
              Whether supporting startups or large enterprises, we bring
              agility, reliability, and a deep commitment to excellence in every
              interaction. At Reveuse Solutions, we don’t just provide
              services—we build relationships, solve real problems, and help our
              clients thrive in a fast-changing world.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1522756890800-ac12d130a43f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlzc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Mission at Reveuse"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>
        </div>

        {/* Our Vision */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Vision at Reveuse"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our vision is to become a globally recognized outsourcing partner,
              celebrated for innovation, operational excellence, and unwavering
              trust. We aim to redefine industry standards by delivering
              transformative digital solutions that empower businesses to scale,
              adapt, and thrive in an ever-evolving world.
              <br />
              <br />
              At Reveuse Solutions, we view the future not as a challenge—but as
              a boundless opportunity to lead, inspire, and create meaningful
              impact across industries and borders. We aspire to be the partner
              of choice for organizations seeking agility, insight, and
              sustainable growth.
            </p>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="bg-blue-50 rounded-xl p-8 my-16 text-center shadow-lg">
          <p className="text-2xl italic font-medium text-blue-800">
            "Excellence is not an act, but a habit. At Reveuse, we live by it."
          </p>
        </div>

        {/* Meet the Team */}
        <div className="mb-24">
          <MeetTeam />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mt-16">
        <HomeContact />
      </section>
    </>
  );
};

export default Aboutus;
