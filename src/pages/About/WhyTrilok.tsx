import { useState, useEffect, useRef } from "react";
import { animate } from "motion";
import { motion } from "motion/react";

const parallaxData = [
  {
    number: 1,
    text: "Welcome to Trilok Precast, where innovation meets reliability in",
  },
  {
    number: 2,
    text: "Trilok Precast is committed to provide high Quality Products and Services in an environment friendly manner, achieving the zenith level in the Cement Product Industry, meeting the needs of customers and employees whilst adding value to the community."
  },
  {
    number: 3,
    text: "From compound walls and security cabins to full-scale precast homes, swimming pools, and road systems — we build for every sector and every need",
  },
  {
    number: 4,
    text: `Our cumulative production has surpassed 4.5 lakh metric tonnes of concrete — reinforcing our position as a large-scale infrastructure enabler`,
  },
  {
    number: 5,
    text: "East or West Trilok Precast is the Best",
  },
];

export function WhyTrilok() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % parallaxData.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (numberRef.current) {
      const node = numberRef.current;
      const controls = animate(
        parseInt(node.textContent || "0"),
        parallaxData[currentIndex].number,
        {
          duration: 1,
          onUpdate(value) {
            node.textContent = Math.round(value).toString();
          },
        }
      );
      return () => controls.stop();
    }
  }, [currentIndex]);

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Why TRILOK Precast
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Animated Circle Section */}
          <div className="relative w-48 h-48 md:w-60 md:h-60 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-blue-100 animate-pulse" />
            <div className="absolute inset-2 rounded-full bg-blue-200" />
            <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center">
              <span
                ref={numberRef}
                className="text-5xl md:text-7xl font-bold text-blue-600"
              >
                {parallaxData[currentIndex].number}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:border-l-4 md:border-gray-300 md:pl-8 text-center md:text-left">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                {parallaxData[currentIndex].text}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
