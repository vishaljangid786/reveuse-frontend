import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import axios from "axios";
import { backendurl } from "../App";
import { Link } from "react-router-dom";

const SuggestedServices = ({ id }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${backendurl}/api/services`);
        // Filter out the current service using the id prop
        const filtered = res.data.filter((service) => service._id !== id);
        setServices(filtered.slice(0, 10)); // Suggested limit
      } catch (err) {
        console.error("Error fetching services");
      }
    };

    fetchServices();
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-14 relative">
      <Heading text1={"Our Other"} text2={"Services"} />

      {/* Scrollable Container */}
      <div className="relative mt-8 overflow-x-auto py-5 pb-14 hide-scrollbar">
        <div className="flex space-x-6 w-max">
          {services.map((service) => (
            <Link
              to={`/services/${service._id}`}
              key={service._id}
              className="min-w-[260px] bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl group">
              {service.imageUrl && (
                <img
                  loading="lazy"
                  src={
                    service.imageUrl.startsWith("http")
                      ? service.imageUrl
                      : `${backendurl}${service.imageUrl}`
                  }
                  alt={service.title}
                  className="w-full h-44 object-cover rounded-t-2xl"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                  {service.description?.slice(0, 70) ||
                    "Professional and reliable service."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Optional: Gradient Scroll Hint */}
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-l from-transparent to-white pointer-events-none" />
    </div>
  );
};

export default SuggestedServices;
