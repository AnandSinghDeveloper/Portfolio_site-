import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";




const Banner = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center p-10 bg-zinc-100">
      
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
          <Typewriter
            
            
           words={['I am a Full Stack Developer', 'Frontend Developer🎨','Backend Developer💻', 'Creative Programmer']} loop={5} cursor cursorStyle="|"   
          />
        </h1>
      </motion.div>

    
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="w-[70%] h-[80%] object-contain"
        src="public/Operating system-bro.png"
        alt="Banner"
      />
    </div>
  );
};

export default Banner;


