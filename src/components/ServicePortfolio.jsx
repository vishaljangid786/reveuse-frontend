import React from "react";
import Heading from "./Heading";

const services = [
  {
    icon: "fas fa-headset",
    title: "Advanced Customer Engagement",
    description:
      "Revolutionizing traditional customer service, we offer a comprehensive omnichannel support system encompassing voice, email, chat, and social media interactions. Our objective is to not just meet but exceed customer satisfaction, fostering a deep sense of loyalty and connection to your brand.",
    color: "text-blue-500",
  },
  {
    icon: "fas fa-chart-line",
    title: "Expert Financial Management",
    description:
      "Our financial services, ranging from meticulous accounting to strategic financial analysis, are crafted to provide you with deep insights and accurate financial reporting. This empowers you to make informed, strategic decisions that drive financial health and business growth.",
    color: "text-green-500",
  },
  {
    icon: "fas fa-laptop-code",
    title: "IT and Technical Support",
    description:
      "In an era where technology is pivotal, our IT support team, equipped with state-of-the-art tools and deep expertise, addresses your technical needs with unmatched efficiency and precision. We ensure your operations are seamless, minimizing downtime and maximizing productivity and innovation.",
    color: "text-purple-500",
  },
  {
    icon: "fas fa-users",
    title: "Human Resource Outsourcing",
    description:
      "We take on the complexities of HR management, including recruitment, payroll processing, and employee engagement. Our services are designed to streamline your HR processes, allowing you to focus on core business functions and strategic growth.",
    color: "text-red-500",
  },
];

const ServicePortfolio = () => {
  return (
    <div className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-repeat bg-center"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23dbeafe' fill-opacity='0.5'/%3E%3C/svg%3E\")",
          }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <Heading text1="Expertise" text2=" You Can Rely On" />

        <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-t-4 border-transparent hover:border-blue-500">
              <div
                className={`flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6 ${service.color}`}>
                <i className={`${service.icon} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePortfolio;
