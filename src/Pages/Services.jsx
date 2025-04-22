import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendurl } from "../App";
import { Link, useNavigate } from "react-router-dom";

import Heading from "../components/Heading";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${backendurl}/api/services`);
        setServices(res.data);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Heading text1={"All"} text2={"Services"} />
      <div className="mb-6 flex justify-end">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <Link
              to={`/services/${service._id}`}
              key={service._id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl group">
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
                <p className=" group-hover:text-blue-600 transition-colors duration-300">
                  →
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center w-full col-span-full">No services found.</p>
        )}
      </div>
    </div>
  );
};

export default Services;
