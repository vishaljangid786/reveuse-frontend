import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { backendurl } from "../App";
import Heading from "../components/Heading";
import TabSlider from "../components/TabSlider";
import SuggestedServices from "../components/SuggestedServices.jsx";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false); // To control full-screen image view

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`${backendurl}/api/services/${id}`);
        if (!res.ok) {
          throw new Error("Failed to load service");
        }
        const data = await res.json();
        setService(data);
      } catch (err) {
        setError(err.message || "Failed to load service");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  useEffect(() => {
    if (!service || !service.details || service.details.length === 0) return;

    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % service.details.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [service]);

  if (loading) return <p className="text-center py-10">Loading service...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Heading text1={"Service"} text2={"Details"} />

        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 hover:underline">
          ← Back
        </button>
        <div className="relative">
          {/* Image Section with Fullscreen Icon */}
          <img
            src={service.imageUrl}
            className="h-[60vh] w-full rounded-2xl cursor-pointer object-cover"
            alt={service.title}
            // onClick={() => setIsImageOpen(true)} // Open full-screen when image is clicked
          />
          <i
            className="fa-solid fa-expand text-white bg-gray-200/50 absolute bottom-2 right-2 p-2 rounded cursor-pointer hover:bg-gray-300/50 transition"
            onClick={() => setIsImageOpen(true)} // Open full-screen modal when clicked
          ></i>
        </div>

        {/* Fullscreen Image Modal */}
        {isImageOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
            <div className="relative max-w-6xl w-full mx-4">
              <img
                loading="lazy"
                src={service.imageUrl}
                alt="Full screen"
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setIsImageOpen(false)} // Close the full-screen modal
                className="absolute top-4 right-4 bg-white text-black px-2 py-1 rounded-full shadow-md hover:bg-red-600 hover:text-white transition">
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{service.title}</h1>
          <p className="text-gray-700 text-lg mulish whitespace-pre-line">
            {service.description}
          </p>
        </div>
      </div>

      {service.details && service.details.length > 0 && (
        <section className="py-16 px-4 min-h-[60vh] bg-gradient-to-br from-sky-100/50 to-indigo-100/50">
          <div className="max-w-6xl mx-auto">
            <Heading text1={"Discover"} text2={"Our Approach"} />

            <div className="mt-10 flex flex-col lg:flex-row gap-6">
              {/* Vertical (on desktop) / Horizontal (on mobile) Tab Headers */}
              <div className="flex overflow-x-auto lg:flex-col gap-3 w-full lg:w-1/4 pb-2 lg:pb-0">
                {service.details.map((detail, index) => {
                  const isActive = selectedIndex === index;

                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      className={`relative flex-shrink-0 group px-4 py-3 text-sm font-medium rounded-lg transition duration-300
                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-blue-100 hover:bg-blue-50"
                  }`}>
                      {detail.head}
                      {isActive && (
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-md group-hover:scale-125 transition-transform duration-300" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Detail Content */}
              <div
                key={selectedIndex}
                className="w-full lg:w-3/4 bg-white/60 backdrop-blur-md border border-white/50 p-6 sm:p-8 rounded-xl shadow-xl transition-all duration-500 animate-fade-in">
                <h3 className="text-xl sm:text-2xl font-semibold text-indigo-800 mb-3 sm:mb-4">
                  {service.details[selectedIndex].head}
                </h3>
                <p className="text-gray-800 text-base leading-relaxed whitespace-pre-line">
                  {service.details[selectedIndex].description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <TabSlider />
      <SuggestedServices id={service._id} />
    </>
  );
};

export default ServiceDetails;
