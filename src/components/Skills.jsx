import React from 'react'
import { TbSettingsCode } from "react-icons/tb";
import { TbDeviceImacCode } from "react-icons/tb";
import { RiToolsFill } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";

const Skills = () => {
  return (
    <div className='w-full h-screen flex justify-center '>
      <div className='bg-[url(https://img.freepik.com/free-vector/flat-design-ui-ux-background-illustrated_23-2149054880.jpg?t=st=1737991673~exp=1737995273~hmac=640798d9eb23028e6e1ec7e1c60e0d490d8251c94c9818fa2d8dc0ce7c428760&w=996)] bg-contain bg-center opacity-30 w-full h-full relative '></div>
      <div className='w-[90%] h-[70%]  flex justify-between items-center absolute skills '>
        <div className='w-[50%] h-[70%]   rounded-2xl flex flex-wrap gap-5 justify-around p-12'>
          <div className='w-[40%] h-[30%]  border-2 rounded-2xl border-blue-400 flex justify-center items-center relative bg-blue-200 '>
          <h4 className='text-2xl font-semibold text-blue-400 '>Frontend</h4>
          <h3 className='absolute top-[-15%] left-[-10%]'> <TbDeviceImacCode style={{width:"50px",height:"50px", color:"#51A2FF", backgroundColor:"#E1EFF8", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderRadius:"15%"}}/> </h3>
          </div>
          <div className='w-[40%] h-[30%]  border-2 rounded-2xl border-blue-400 flex justify-center items-center relative '>
          <h4 className='text-2xl font-semibold text-blue-400 '>Backend</h4>
          <h3 className='absolute top-[-15%] left-[-10%]'> <TbSettingsCode style={{width:"50px",height:"50px", color:"#51A2FF", backgroundColor:"#E1EFF8", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderRadius:"15%"}}/> </h3>
          </div>
          <div className='w-[40%] h-[30%]  border-2 rounded-2xl border-blue-400 flex justify-center items-center relative '>
          <h4 className='text-2xl font-semibold text-blue-400 '>Tools</h4>
          <h3 className='absolute top-[-15%] left-[-10%]'> <RiToolsFill style={{width:"50px",height:"50px", color:"#51A2FF", backgroundColor:"#E1EFF8", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderRadius:"15%"}}/> </h3>
          </div>
          <div className='w-[40%] h-[30%]  border-2 rounded-2xl border-blue-400 flex justify-center items-center relative '>
          <h4 className='text-2xl font-semibold text-blue-400 '>Soft Skills</h4>
          <h3 className='absolute top-[-15%] left-[-10%]'> <BsPeople style={{width:"50px",height:"50px", color:"#51A2FF", overflow:"hidden", borderRadius:"20%", backgroundColor:"#E1EFF8", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/> </h3>
          </div>

        </div>
        <div className='w-[40%] h-[90%] flex rounded-2xl  border'>
          
        </div>
      </div>

  </div>

    
  )
}

export default Skills
