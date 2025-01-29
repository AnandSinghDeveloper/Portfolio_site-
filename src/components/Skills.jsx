import React from 'react'
import { TbSettingsCode } from "react-icons/tb";
import { TbDeviceImacCode } from "react-icons/tb";
import { RiToolsFill } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";

const Skills = () => {
  return (
    <div className='w-full h-[80vh] flex justify-center '>
     
      <div className=' bg-contain bg-center opacity-30 w-full h-full relative skill-container rounded-tl-2xl rounded-tr-2xl top-[-20] '>
        <img className='w-full h-full object-contain ' src="src/components/img/World Youth Skills Day-pana.png" alt="" />
      </div>
      <div className='w-[90%] h-[70%]  flex justify-between items-center absolute  '>
        <div className='w-[50%] h-[70%]   rounded-2xl flex flex-wrap gap-5 justify-around p-12'>
          <div className='w-[40%] h-[30%]  border-2 rounded-2xl border-blue-400 flex justify-center items-center relative skills '>
          <h4 className='text-2xl font-semibold text-blue-400 '>Frontend</h4>
          <h3 className='absolute top-[-15%] left-[-10%]'> <TbDeviceImacCode style={{width:"50px",height:"50px", color:"#51A2FF", backgroundColor:"#E1EFF8", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderRadius:"15%"}}/> </h3>
          </div>
          <div className='w-[40%] h-[30%]  border-2 rounded-2xl border-blue-400 flex justify-center items-center relative skills '>
          <h4 className='text-2xl font-semibold text-blue-400 '>Backend</h4>
          <h3 className='absolute top-[-15%] left-[-10%]'> <TbSettingsCode style={{width:"50px",height:"50px", color:"#51A2FF", backgroundColor:"#E1EFF8", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderRadius:"15%"}}/> </h3>
          </div>
          <div className='w-[40%] h-[30%]  border-2 rounded-2xl border-blue-400 flex justify-center items-center relative skills'>
          <h4 className='text-2xl font-semibold text-blue-400 '>Tools</h4>
          <h3 className='absolute top-[-15%] left-[-10%]'> <RiToolsFill style={{width:"50px",height:"50px", color:"#51A2FF", backgroundColor:"#E1EFF8", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderRadius:"15%"}}/> </h3>
          </div>
          <div className='w-[40%] h-[30%]  border-2 rounded-2xl border-blue-400 flex justify-center items-center relative skills '>
          <h4 className='text-2xl font-semibold text-blue-400 '>Soft Skills</h4>
          <h3 className='absolute top-[-15%] left-[-10%]'> <BsPeople style={{width:"50px",height:"50px", color:"#51A2FF", overflow:"hidden", borderRadius:"20%", backgroundColor:"#E1EFF8", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}/> </h3>
          </div>

          {/* skill part two */}

        </div>
        <div className='w-[50%] h-[95%] flex rounded-2xl mx-[5] border-3 border-blue-400 flex-col'>
          <div className='w-[100%] h-[10%] border-b-2 border-blue-400 rounded-tr-2xl rounded-tl-2xl flex justify-start items-center '>
            <h3 className='text-2xl font-semibold text-blue-400 ml-4'>Frontend</h3>
          </div>
          <div  className='w-[100%] p-5'>
            <label className='text-xl font-semibold text-blue-400 flex justify-between'  > <li>Html</li>
            <label className='text-xl font-semibold text-blue-400  ' > 80%</label>
            </label>
            <input className='w-full outline-none  border-blue-400 ' type="range" min="0" max="100" value="80"  />
          </div>


           <div  className='w-[100%] p-5'>
            <label className='text-xl font-semibold text-blue-400 flex justify-between capitalize'  > <li>cSS</li>
            <label className='text-xl font-semibold text-blue-400  ' > 70%</label>
            </label>
            <input className='w-full  border-none  bg-blue-700 rounded-lg focus:outline-none' type="range" min="0" max="100" value="70"  />
          </div>


            <div  className='w-[100%] p-5'>
            <label className='text-xl font-semibold text-blue-400 flex justify-between'  > <li>Javascript</li>
            <label className='text-xl font-semibold text-blue-400  ' > 80%</label>
            </label>
            <input className='w-full outline-none  ' type="range" min="0" max="100" value="80"  />
          </div>


          <div  className='w-[100%] p-5'>
            <label className='text-xl font-semibold text-blue-400 flex justify-between'  > <li>React</li>
            <label className='text-xl font-semibold text-blue-400  ' > 85%</label>
            </label>
            <input className='w-full  ' type="range" min="0" max="100" value="85"  />
          </div>
          
        </div>
        

          
      </div>

  </div>

    
  )
}

export default Skills
