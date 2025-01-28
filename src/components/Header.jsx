import React from 'react'

const Header = () => {
  return (
   <div >

    
     <div className='fixed top-0 left-0 w-full z-50 '>
        <div className='w-[99%] h-[20%] flex items-center px-4 justify-between header '>
         <div className='w-[15%] h-[10vh] pl-4'>
          <img className='w-full h-full object-cover mx-5' src="https://autocomponentsindia.com/wp-content/uploads/2020/09/ANAND.png" alt="logo" />
         </div>
         <div className='w-[85%] h-[10vh] flex justify-end items-center gap-14'>
          <a className='hover:text-blue-500 hover:border-b-2  ' href="#">Home </a>
          <a className='hover:text-blue-500 hover:border-b-2 '  href="#">About</a>
          <a  className='hover:text-blue-500 hover:border-b-2 ' href="#">Skill</a>
          <a  className='hover:text-blue-500 hover:border-b-2 ' href="#">Project</a>
          <button className='bg-blue-400 px-4 py-2 rounded-lg text-white hover:bg-blue-600'>Download CV</button>
          

         </div>

         
        </div>
    </div>
   </div>
  )
}

export default Header
