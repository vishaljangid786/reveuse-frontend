import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { backendurl } from "../App";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import FeatureScroll from "./FeatureScroll";

const CompaniesOverview = () => {
  const [services, setServices] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState("");

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backendurl}/api/services`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();

      // Reverse the array to get descending order and take the first 6 items
      const latestSix = data.slice().reverse().slice(0, 6);
      setServices(latestSix);
    } catch (err) {
      console.error("Failed to fetch:", err);
      setError("Failed to load services.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices(page);
  }, []);

  return (
    <div>
      <Heading
        text1="Companies Overview"
        text2="Our Partners"
        toggle="company"
      />
      <FeatureScroll />

      <div className="scale-75">
        <Heading text1="My" text2="Gallery" />
      </div>

      {loading && <Loader />}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="max-w-6xl mx-auto px-4 py-12 mb-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service._id}
            className="rounded-xl hover:scale-105 cursor-pointer overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <Link to="/services">
              <img
                loading="lazy"
                src={service.imageUrl}
                alt={`Service ${index + 1}`}
                className="h-64 w-full object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesOverview;
