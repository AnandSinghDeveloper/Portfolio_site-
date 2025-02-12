import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";



const Banner = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center p-10 bg-zinc-100">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-[40%] h-[50%]"
      >
        <h2 className="text-3xl font-medium mx-10">Hi There 👋</h2>
        <div className="text-5xl font-semibold mx-10 pt-5">
          I'm <span className="text-blue-400 taxt-5xl font-bold">Anand</span>
        </div>
        <h1 className="text-5xl font-semibold mx-10 pt-5 text-[#105245]">
          <Typical
            loop={Infinity}
            smooth={500}
            steps={[
              "Full Stack Developer ",
              3000,
              "Frontend Specialist 🎨",
              3000,
              "Backend Specialist 🔧",
              3000,
              "Creative Problem Solver 🧠",
              3000,
            ]}
          />
        </h1>
      </motion.div>

      {/* Image Section */}
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="w-[70%] h-[80%] object-contain"
        src="src/components/img/Operating system-bro.png"
        alt="Banner"
      />
    </div>
  );
};

export default Banner;


