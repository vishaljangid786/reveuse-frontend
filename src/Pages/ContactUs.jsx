import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Seo from "../components/Seo";
import ContactImage from "../assets/aeb332098d3a352c570beecb08b08d3f.webp";

const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_nvkapih",
        "template_j3t3y7c",
        form.current,
        "4K4NskaqVN57E6QZc"
      )
      .then(
        () => {
          form.current.reset();
          setSubmitted(true);
          setLoading(false);
          setTimeout(() => setSubmitted(false), 6000);
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-16"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      <Seo
        title="Contact Reveuse Solutions | Let's Build Something Great"
        description="Reach out to Reveuse Solutions for business inquiries, partnerships, or questions."
        keywords="contact Reveuse, software solutions, custom IT, business inquiry"
        url="https://www.thereveuse.com/contact"
        image="https://www.thereveuse.com/assets/contact.jpg"
      />

      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-300 w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Image + Info */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-pink-500 text-white p-8 flex flex-col justify-center">
          <div className="text-left space-y-6">
            <h2 className="text-4xl font-bold leading-tight">Let’s Talk</h2>
            <p className="text-white/90 text-lg">
              Have an idea or question? Share it with us and we’ll reach out
              soon!
            </p>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>📞 +91-9530104044</li>
              <li>📧 info@thereveuse.com</li>
              <li>📍 Nathdwara, Rajasthan, India</li>
            </ul>
          </div>
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 p-8 bg-white">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Send us a message
          </h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name *"
                required
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email *"
                required
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              name="message"
              rows="4"
              placeholder="Your message *"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-semibold rounded-md transition duration-300 ${
                loading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                "Send Message"
              )}
            </button>

            {submitted && (
              <div className="bg-green-100 text-green-800 border border-green-400 p-3 rounded-md text-center text-sm mt-2 animate-fade-in">
                ✅ Your message has been sent. We’ll respond shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
