import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { backendurl } from "../App";
import Heading from "../components/Heading";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`${backendurl}/api/services/${id}`);
        setService(res.data);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to load service");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading service...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Heading text1={"Service"} text2={"Details"} />

      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline">
        ← Back
      </button>

      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        {service.imageUrl && (
          <img
            src={
              service.imageUrl.startsWith("http")
                ? service.imageUrl
                : `${backendurl}${service.imageUrl}`
            }
            alt={service.title}
            className="w-full h-64 object-cover rounded-md"
          />
        )}

        <h1 className="text-3xl font-bold text-gray-800">{service.title}</h1>
        <p className="text-gray-700 text-lg">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
