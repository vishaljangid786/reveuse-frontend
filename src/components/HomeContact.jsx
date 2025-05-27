import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const HomeContact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qlhmbct",
        "template_3izuove",
        form.current,
        "McAGVU7aUYBO2XdG9"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setSubmitted(true);
          setLoading(false);
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${"https://res.cloudinary.com/djvxynk2f/image/upload/v1748309299/img8_flrpz1.webp"})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255,255,255,0.85)",
      }}>
      <div className="bg-white/70 backdrop-blur-lg border border-gray-300 shadow-2xl rounded-3xl max-w-6xl w-full p-8 md:p-14 flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Let’s Work Together
          </h2>
          <p className="text-gray-700 text-lg">
            Got a project in mind or just want to say hello? We’re just a
            message away.
          </p>
          <div className="text-gray-700 space-y-2 text-sm mt-6">
            <p>📞 +91-9530104044</p>
            <p>📧 info@thereveuse.com</p>
            <p>🏢 Nathdwara, Rajasthan, India</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 w-full">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-semibold text-white rounded-lg transition duration-300 ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-transparent border-2 border-blue-500 hover:text-blue-500"
              }`}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {submitted && (
              <p className="text-green-700 bg-green-100 border border-green-400 mt-3 p-3 rounded-md text-sm text-center">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
