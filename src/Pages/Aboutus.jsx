import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeContact from "../components/HomeContact";
import Heading from "../components/Heading";

const Aboutus = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-gray-50 min-h-screen px-6 py-12 md:px-20 lg:px-32 font-sans">
        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-down">
          <Heading text1={"The Story"} text2={"of Reveuse"} />
        </div>

        {/* Mission Section */}
        <div
          className="bg-white shadow-xl rounded-2xl p-8 mb-16 transition hover:shadow-2xl"
          data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">MISSION</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Reveuse, our mission is to elevate your lifestyle through
            premium, personalized services tailored to your specific needs. With
            an unwavering commitment to excellence, we ensure that every
            interaction leaves our clients feeling valued and satisfied. Whether
            it’s through our bespoke consultations or hands-on support, we aim
            to provide an experience that not only meets but exceeds your
            expectations. Join us in this journey towards making your everyday
            life a little more luxurious and enjoyable.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-16" data-aos="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e"
            alt="By Annie Spratt"
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
          <p className="text-sm text-gray-500 mt-2 text-right">
            Image by Annie Spratt
          </p>
        </div>

        {/* Vision Section */}
        <div
          className="bg-white shadow-xl rounded-2xl p-8 mb-16 transition hover:shadow-2xl"
          data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            OUR VISION
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our vision is to emerge as a pioneering outsourcing service
            provider, globally renowned for delivering unparalleled value to our
            clients and setting a new paradigm for excellence in the industry.
            We strive to provide transformative outsourcing services that exceed
            our clients' expectations, fostering long-term partnerships and
            driving business growth through innovation and excellence. By
            delivering exceptional quality, reliability, and excellence, we aim
            to become the go-to outsourcing partner for businesses globally,
            earning their trust and loyalty through our unwavering commitment to
            client satisfaction. We are dedicated to staying ahead of the curve,
            leveraging cutting-edge technologies and best practices to drive
            continuous improvement and innovation. Through our vision, we aim to
            make a lasting impact on the businesses we serve, helping them
            achieve their goals and succeed in an ever-changing market
            landscape.
          </p>
        </div>

        {/* Quote Block */}
        <div
          className="bg-blue-50 rounded-xl p-6 my-12 text-center shadow-md"
          data-aos="fade-in">
          <p className="text-xl italic text-blue-800">
            "Excellence is not an act, but a habit. At Reveuse, we live by it."
          </p>
        </div>

        {/* Team Section */}
        <div className="my-16" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Example Team Member */}
            <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Team member"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg text-gray-800">John Doe</h3>
              <p className="text-blue-600 text-sm">Chief Visionary Officer</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Team member"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg text-gray-800">Jane Smith</h3>
              <p className="text-blue-600 text-sm">Head of Operations</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
              <img
                src="https://randomuser.me/api/portraits/men/64.jpg"
                alt="Team member"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg text-gray-800">David Lee</h3>
              <p className="text-blue-600 text-sm">Tech & Innovation Lead</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
      </div>
      <div data-aos="fade-up" className="mt-16">
        <HomeContact />
      </div>
    </>
  );
};

export default Aboutus;
