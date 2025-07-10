import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";
const Home = lazy(() => import("./Pages/Home.jsx"));
const Aboutus = lazy(() => import("./Pages/Aboutus.jsx"));
const Services = lazy(() => import("./Pages/Services.jsx"));
const Blog = lazy(() => import("./Pages/Blog.jsx"));
const ContactUs = lazy(() => import("./Pages/ContactUs.jsx"));
const BlogForm = lazy(() => import("./Pages/admin/BlogForm.jsx"));
const Login = lazy(() => import("./Pages/Login.jsx"));
const BlogDetails = lazy(() => import("./Pages/BlogDetails.jsx"));
const AllServices = lazy(() => import("./Pages/admin/AllServices.jsx"));
const AdminLayout = lazy(() => import("./Pages/AdminLayout.jsx"));
const AllBlog = lazy(() => import("./Pages/admin/AllBlog.jsx"));
const NewService = lazy(() => import("./Pages/admin/NewService.jsx"));
const ServiceDetails = lazy(() => import("./Pages/ServiceDetails.jsx"));
const FAQ = lazy(() => import("./components/FAQ.jsx"));
const CompaniesOverview = lazy(() => import("./components/CompaniesOverview"));
const ServicePortfolio = lazy(() => import("./components/ServicePortfolio"));
const BlogSlider = lazy(() => import("./components/BlogSlider"));

// export const backendurl = "http://localhost:5000";
export const backendurl = "https://thereveuse.com";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100); // Show after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          {/* admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="createblog" element={<BlogForm />} />
            <Route path="allblogs" element={<AllBlog />} />
            <Route path="createservice" element={<NewService />} />
            <Route path="allservices" element={<AllServices />} />
          </Route>
        </Routes>
      </Suspense>
      {isVisible && (
        <button
          onClick={handleClick}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:bg-blue-700 hover:rotate-45">
          <i className="fas fa-arrow-up text-2xl"></i>
        </button>
      )}

      <Footer />
    </BrowserRouter>
  );
};

export default App;
