import React from 'react'

const Bainner = () => {
  return (
    <div className='w-full h-screen flex justify-between  items-center p-10 bainer '> 
   
    <div className='w-[40%] h-[50%]  '>
      <h2 className='text-3xl font-medium mx-10'> Hi There ,  </h2>
      <div className='text-4xl font-semibold mx-10 pt-3'> I'm <span className='text-blue-400'>Anand</span></div>
      <h1 className=' text-5xl font-semibold mx-10 pt-3 text-[#105245]'>Full stack developer</h1>
      
    </div>

    <img className='w-[70%] h-[80%] object-contain' src="src/components/img/Operating system-bro.png" alt="Bainner" />
      
    </div>
  )
}

export default Bainner
