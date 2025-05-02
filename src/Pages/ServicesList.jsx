// components/ServiceList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendurl } from "../App";
import { Link } from "react-router-dom";
import AOS from "aos";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${backendurl}/api/services`);
        setServices(res.data);
      } catch (err) {
        console.error("Error fetching services");
      }
    };

    fetchServices();
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mb-6 flex justify-end">
        <input
          type="text"
          placeholder="Search services..."
          data-aos="fade-left"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <Link
              to={`/services/${service._id}`}
              key={service._id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl group"
              data-aos="fade-up">
              {service.imageUrl && (
                <img
                  src={
                    service.imageUrl.startsWith("http")
                      ? service.imageUrl
                      : `${backendurl}${service.imageUrl}`
                  }
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="group-hover:text-blue-600 transition-colors duration-300">
                  →
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center w-full col-span-full">No services found.</p>
        )}
      </div>
    </>
  );
};

export default ServiceList;
