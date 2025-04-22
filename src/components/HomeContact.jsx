import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import bgPattern from "../assets/home-slider3.jpg"; // Use a pattern or gradient background

const HomeContact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // replace with actual ID
        "your_template_id", // replace with actual template ID
        form.current,
        "your_public_key" // replace with actual public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-r from-indigo-100 via-blue-100 to-pink-100"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}>
      <div className="bg-white/60 backdrop-blur-md shadow-2xl rounded-3xl max-w-5xl w-full p-8 md:p-14 flex flex-col md:flex-row gap-10 border border-gray-300">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800">Let's Talk!</h2>
          <p className="text-gray-600 text-lg">
            Have a project or just want to connect? Fill out the form and we’ll
            be in touch soon.
          </p>
          <ul className="text-gray-700 space-y-2 text-sm">
            <li>📞 +91-1234567890</li>
            <li>📧 hello@example.com</li>
            <li>🏢 New Delhi, India</li>
          </ul>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 via-blue-500 to-pink-500 hover:to-indigo-500 hover:from-pink-500  text-white font-bold py-3 rounded-lg shadow-md hover:shadow-xl transition duration-300 relative overflow-hidden group">
              <span className="relative z-10">Send Message</span>
              {/* Pulse effect on hover */}
              <span className="absolute inset-0 bg-white opacity-10 group-hover:animate-ping rounded-lg"></span>
            </button>

            {submitted && (
              <p className="text-green-600 text-sm mt-2">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
