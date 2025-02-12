import React from "react";
import { motion } from "framer-motion";
import About from "./About";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="w-full h-[10%] flex items-center px-4 justify-between header backdrop-blur-xl">
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[30%] md:w-[15%] h-[10vh] pl-2"
          >
            <img
              className="w-full h-full object-cover mx-3 md:mx-5"
              src="https://autocomponentsindia.com/wp-content/uploads/2020/09/ANAND.png"
              alt="logo"
            />
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex w-[85%] h-[10vh] justify-end items-center gap-4 md:gap-14"
          >
            <a
              className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-transform duration-300"
              href="#"
            >
              Home
            </a>
            <a 
              className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-transform duration-300"
              href="#"
            >
              About
            </a>
            <a
              className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-transform duration-300"
              href="#"
            >
              Skill
            </a>
            <a
              className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-transform duration-300"
              href="#"
            >
              Project
            </a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-400 px-4 py-2 rounded-lg transition-transform duration-300 text-white hover:bg-blue-600"
            >
              Download CV
            </motion.button>
          </motion.div>

        
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="text-blue-500 text-2xl focus:outline-none"
            >
              ☰
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
