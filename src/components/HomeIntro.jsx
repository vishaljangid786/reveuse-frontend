import React from "react";
import { Link } from "react-router-dom";

const HomeIntro = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-6">
            The Reveuse Solution <br />
            <span className="text-blue-600">Our Journey</span>
          </h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            At <strong>The Reveuse Solution</strong>, we set the benchmark for
            excellence in Business Process Outsourcing (BPO). Headquartered in
            India, we proudly serve a global clientele with intelligent,
            scalable, and customized outsourcing solutions that empower
            businesses to grow, streamline operations, and stay ahead in a
            rapidly evolving market.
          </p>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Whether you're an agile startup or an established enterprise, our
            services are tailored to align with your unique goals and
            operational challenges. Our diverse team of industry experts brings
            together innovation, strategic insight, and operational excellence
            to consistently deliver measurable results.
          </p>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            When you partner with us, you're not just outsourcing a task —
            you're gaining a dedicated growth partner committed to driving
            transformation, efficiency, and sustainable success at every stage
            of your business journey.
          </p>
          <Link
            to="/about"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
            Learn More
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team working"
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white shadow-md rounded-lg p-4 w-40 text-center">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/globe--v1.png"
                alt="Globe"
                className="w-8 mx-auto mb-2"
              />
              <p className="text-sm font-medium text-gray-600">Global Impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
