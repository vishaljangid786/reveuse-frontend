import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendurl } from "../App";
import { useNavigate } from "react-router-dom";

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
            <div
              key={service._id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
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
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description.slice(0, 100)}...
                </p>
                <div className="mt-4 text-sm text-gray-500 flex justify-between">
                  <span>👍 {service.likes || 0}</span>
                  <span>💬 {service?.comments?.length || 0}</span>
                  <span>
                    📅 {new Date(service.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <button
                  className="mt-2 text-blue-600 hover:underline"
                  onClick={() => navigate(`/services/${service._id}`)}>
                  Read more
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-full col-span-full">No services found.</p>
        )}
      </div>
    </div>
  );
};

export default Services;
