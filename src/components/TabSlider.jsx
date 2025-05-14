import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./Heading";

const tabs = [
  {
    id: "Data Security",
    title: "Data Security",
    image: "/images/slide1.webp",
    description:
      "As an ISO/IEC 27001:2022-certified organization, we safeguard your critical information with rigorous measures, ensuring confidentiality, integrity, and availability. Our commitment to globally recognized standards and continuous monitoring protects your sensitive data. Trust us with your data and rely on our expertise. We prioritize security and confidentiality.",
  },
  {
    id: "Tools & Technologies",
    title: "Tools & Technologies",
    image: "/images/slide1.webp",
    description: "We leverage cutting-edge tools and technologies to deliver high-quality services, including advanced data analytics and visualization tools, cloud-based platforms for scalable and secure operations, robust cybersecurity measures to protect sensitive data, and industry-leading software solutions. By staying up-to-date with the latest technologies, we drive innovation, efficiency, and excellence in our services, ensuring our clients receive the best possible outcomes.",
  },
  {
    id: "Expert Team",
    title: "Expert Team",
    image: "/images/slide1.webp",
    description:
      " Our team of experts brings extensive experience and knowledge to deliver high-quality services. Our professionals are skilled, dedicated, and passionate about helping clients achieve their goals. With a deep understanding of industry trends and best practices, our team provides innovative solutions and exceptional support. We foster a collaborative environment that encourages growth, learning, and excellence. Our team's expertise and commitment ensure our clients receive the best possible outcomes. Trust our experts to drive your success.",
  },
  {
    id: "World-class Infrastructure",
    title: "World-class Infrastructure",
    image: "/images/slide1.webp",
    description:
      "We invest in world-class infrastructure to support our clients' needs. Our state-of-the-art facilities and cutting-edge technology enable seamless operations, efficient communication, and secure data management. With robust systems and reliable networks, we ensure high-performance capabilities and minimal downtime. Our infrastructure is designed to support scalability, flexibility, and innovation, allowing us to deliver exceptional services to our clients. By leveraging the latest advancements, we drive efficiency and excellence in everything we do.",
  },
];

const TabSlider = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Heading text1={"Smart"} text2={"Solutions"} />

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 bg-slate-50 p-2 rounded-full shadow-inner">
        {tabs.map((tab) => (
          <div key={tab.id} className="relative">
            <button
              onClick={() => setSelected(tab)}
              className={`relative z-10 px-5 py-2 font-medium text-sm rounded-full transition-colors duration-300
                ${
                  selected.id === tab.id
                    ? "text-white"
                    : "text-gray-700 hover:text-blue-600"
                }`}
            >
              {tab.title}
            </button>
            {selected.id === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 bg-blue-500 rounded-full -z-0"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Animated Content */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-xl border border-slate-200"
          >
            <motion.img
              src={selected.image}
              alt={selected.title}
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-3">
                {selected.title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {selected.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabSlider;
