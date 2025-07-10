import React, { useEffect } from "react";
import Heading from "./Heading";

const MeetTeam = () => {
  return (
    <div className="my-16">
      <Heading text1="Meet" text2="Our Founder" />
      <div className="">
        {/* Founder */}
        <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
          <img
            loading="lazy"
            src={
              "https://res.cloudinary.com/djvxynk2f/image/upload/v1748310519/founder_aodpn3.webp"
            }
            alt="Kamlesh Dangi"
            className="w-1/3 h-1/3  rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="font-bold text-2xl text-gray-800">Kamlesh Dangi</h3>
          <p className="text-blue-600 text-sm">Founder & CEO</p>
        </div>

        {/* Head of Ops */}
        {/* <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition">
          <img
            loading="lazy"
            src={
              "https://res.cloudinary.com/djvxynk2f/image/upload/v1748309376/Dangi_mrjkbv.jpg"
            }
            alt="R Dangi"
            className="w-48 h-48 rounded-full mx-auto mb-4 object-cover object-top"
          />
          <h3 className="font-bold text-lg text-gray-800">VS Sukhwal</h3>
          <p className="text-blue-600 text-sm">Head of Operations</p>
        </div> */}
      </div>
    </div>
  );
};

export default MeetTeam;
