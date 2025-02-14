import React from 'react'

import { motion } from "framer-motion";
const Soft_Skills = () => {
  return (
    <div>
       <div className='w-[100%] h-[10%] border-b-2 border-gray-500 rounded-tr-2xl rounded-tl-2xl flex justify-start items-center  '>
                  <h3 className='text-2xl font-semibold text-gray-500 ml-4'>Soft Skills</h3>
                </div>
                {[
                  { skill: "Communication", value: 90 },
                  { skill: "Problem-solving", value: 95 },
                  { skill: "Collaboration", value: 88 },
                  { skill: "Adaptability", value: 99 },
                  
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className='w-[100%] p-5 px-5'
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <label className='text-lg font-semibold text-gray-500 flex justify-between capitalize'>
                      <li>{item.skill}</li>
                      <span>{item.value}%</span>
                    </label>
                    <input
                      className='w-full h-3 rounded-lg bg-gray-200 appearance-none cursor-pointer transition-all duration-300 hover:bg-gray-300 input-range'
                      type="range"
                      min="0"
                      max="100"
                      value={item.value}
                      readOnly
                    />
                  </motion.div>
                ))}
      
    </div>
  )
}

export default Soft_Skills
