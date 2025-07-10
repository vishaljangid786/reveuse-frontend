import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../assets/assets";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasToken, setHasToken] = useState(!!localStorage.getItem("token"));
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);


  // Listen for localStorage changes
  useEffect(() => {
    const checkToken = () => {
      setHasToken(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkToken);

    // Optional: react to manual logout within the same tab
    const interval = setInterval(checkToken, 1000); // fallback in same tab

    return () => {
      window.removeEventListener("storage", checkToken);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-white shadow-md py-2 px-0 sm:px-10 sticky w-full top-0 z-50 transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/djvxynk2f/image/upload/v1748309440/light2_vxsiq6.png"
            className="w-20 md:w-32 sm:ml-0 ml-4"
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 items-center text-gray-700 font-medium">
          {navLinks.map((item, index) => {
            const isActive = location.pathname === item.link;
            return (
              <Link
                to={item.link}
                key={index}
                className={`relative mulish group transition-all duration-300 cursor-pointer ${
                  item.label === "Contact Us"
                    ? "text-white bg-blue-500 px-5 py-2 rounded hover:text-blue border border-blue-500 hover:bg-white hover:text-blue-500"
                    : `hover:text-blue-600 ${
                        isActive ? "text-blue-600 font-bold" : ""
                      }`
                }`}>
                <div className="flex items-center gap-2">
                  <div className="lg:block hidden">
                    {item.icon && <i className={item.icon}></i>}
                  </div>
                  <span>{item.label}</span>
                </div>
                {item.label !== "Contact Us" && (
                  <span
                    className={`absolute rounded-full left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100 ${
                      isActive ? "scale-x-100" : ""
                    }`}></span>
                )}
              </Link>
            );
          })}

          {/* Admin link */}
          {hasToken && (
            <Link
              to="/admin/createblog"
              className="relative inline-block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300">
              <span className="relative z-10">
                <i className="fa-solid fa-user"></i>
              </span>
            </Link>
          )}
        </ul>

        {/* Mobile toggle */}
        <div className="sm:hidden sm:pr-0 pr-4">
          <button
            onClick={toggleMobileMenu}
            className="text-3xl text-gray-700 focus:outline-none">
            <i
              className={`fa-solid ${
                isMobileMenuOpen ? "fa-xmark" : "fa-bars"
              }`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`sm:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}>
        <ul className="flex flex-col gap-2 px-2 pt-2 bg-white rounded-md shadow text-gray-700 font-medium">
          {navLinks.map((item, index) => {
            const isActive = location.pathname === item.link;

            return (
              <Link to={item.link} key={index}>
                {item.label === "Contact Us" ? (
                  <li className="flex w-2/3 mt-5 justify-center items-center gap-3 text-white border-2 border-blue-500 bg-blue-500 rounded-full px-8 py-3 mx-auto transition-all duration-300 hover:bg-white hover:text-blue-500">
                    {item.icon && <i className={item.icon}></i>}
                    <span>{item.label}</span>
                  </li>
                ) : (
                  <li
                    className={`flex items-center gap-3 ${
                      isActive
                        ? "text-blue-600 pb-2 px-4 border-b font-bold"
                        : "hover:text-blue-600 px-2 py-2 transition-all duration-300 cursor-pointer"
                    }`}>
                    {item.icon && <i className={item.icon}></i>}
                    <span>{item.label}</span>
                  </li>
                )}
              </Link>
            );
          })}

          {/* Admin in Mobile */}
          {hasToken && (
            <Link to="/admin">
              <li className="flex bg-transparent w-fit mx-auto text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white rounded px-10 items-center gap-3 py-2 transition-all duration-300 cursor-pointer">
                <i className="fa-solid fa-user"></i>
                Admin
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
