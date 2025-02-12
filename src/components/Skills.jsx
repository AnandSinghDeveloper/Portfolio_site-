import React from 'react';
import { TbSettingsCode, TbDeviceImacCode } from "react-icons/tb";
import { RiToolsFill } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { motion } from "framer-motion";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <div className='w-full h-[80vh] flex justify-center bg-zinc-100'>
      <div className='bg-contain bg-center opacity-30 w-full h-full relative skill-container rounded-tl-2xl rounded-tr-2xl top-[-20]'>
        <img
          className='w-full h-full object-contain'
          src="src/components/img/World Youth Skills Day-pana.png"
          alt=""
        />
      </div>
      <div className='w-[90%] h-[70%] flex justify-between items-center absolute'>
        {/* Skill Boxes with Hover Animations */}
        <div className='w-[50%] h-[70%] rounded-2xl flex flex-wrap gap-5 justify-around p-12'>
          {[
            { title: "Frontend", icon: <TbDeviceImacCode /> },
            { title: "Backend", icon: <TbSettingsCode /> },
            { title: "Tools", icon: <RiToolsFill /> },
            { title: "Soft Skills", icon: <BsPeople /> }
          ].map((skill, index) => (
            <motion.div
              key={index}
              className='w-[40%] h-[30%] shadow-lg rounded-2xl  flex justify-center items-center relative skills cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300 '
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h4 className='text-2xl font-semibold text-gray-500'>{skill.title}</h4>
              <div className='absolute top-[-15%] left-[-10%]'>
                {React.cloneElement(skill.icon, {
                  style: {
                    width: "50px",
                    height: "50px",
                    color: "#4A5565",
                    backgroundColor: "#8080801b",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    borderRadius: "15%"
                  }
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frontend Skills with Interactive Sliders */}
        <motion.div
          className='w-[50%] h-[95%] flex rounded-2xl mx-[5]  border-gray-500 flex-col  shadow-lg hover:scale-105 transition-transform duration-300'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
         {/* <Frontend /> */}
         <Backend />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
