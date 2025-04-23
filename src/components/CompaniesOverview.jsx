import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imagesCompanies } from "../assets/assets";
import { motion } from "framer-motion";
import axios from "axios";
import { backendurl } from "../App";
import Loader from "./Loader";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute -bottom-12 right-0 z-10 cursor-pointer p-2 bg-blue-500 hover:bg-transparent hover:text-blue-500 border-2 transition duration-300 border-blue-500 text-white rounded-full"
    onClick={onClick}>
    <ChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -bottom-12  right-0 -translate-x-12 z-10 cursor-pointer p-2 bg-blue-500 hover:bg-transparent hover:text-blue-500 border-2 transition duration-300 border-blue-500 text-white rounded-full"
    onClick={onClick}>
    <ChevronLeft />
  </div>
);

const CompaniesOverview = () => {
  const [services, setServices] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // To stop if no more data

  const [error, setError] = useState("");
  const handleSlideChange = (current) => {
    // If user is on the last visible slide and more data is available
    if (current >= services.length - 1 && hasMore && !loading) {
      const nextPage = page + 1;
      fetchServices(nextPage);
      setPage(nextPage);
    }
  };

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "80px",
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    pauseOnHover: false, // Try false for testing
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: handleSlideChange,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };
  const fetchServices = async (pageNum = 1) => {
    setLoading(true);
    try {
      const res = await axios.get(`${backendurl}/api/services?page=${pageNum}`);
      if (res.data.length === 0) {
        setHasMore(false);
      } else {
        setServices((prev) => [...prev, ...res.data]);
      }
    } catch (err) {
      console.error("Failed to fetch:", err);
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
      {loading && <Loader />}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="relative max-w-6xl mx-auto px-4 py-12 mb-10 ">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={service._id} className="px-2">
              <motion.div
                className="h-64 rounded-xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}>
                <img
                  src={service.imageUrl} // use the actual service image
                  alt={`Service ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CompaniesOverview;
