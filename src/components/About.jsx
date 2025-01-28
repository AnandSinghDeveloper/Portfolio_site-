import React from 'react'

const About = () => {
  return (
    <div className='h-screen w-full bg-blue-200 relative main  '>

    <div className='h-[80%] w-[90%]  absolute top-[-3%] rounded-2xl left-[5%] about '>
      
       <div className='bg-[url(src/components/img/download.png)] bg-contain bg-center opacity-20 w-full h-full relative '></div>


    <div className=' absolute top-[10%]'>
    <h3 className=' text-center text-3xl text-purple-900 font-semibold pt-10'>About me !</h3>
      <p className='p-10 font-medium text-lg text-zinc-900 z-50 ' >Hello! My name is Aanand, and I am a passionate full-stack developer with a love for technology, creativity, and continuous learning. I enjoy building intuitive and functional solutions that solve real-world problems and create meaningful user experiences. With expertise in both frontend and backend development, I strive to deliver seamless and impactful applications.

      My journey in coding began with a curiosity for technology, which soon transformed into a passion for creating interactive and robust systems. Over time, I have developed strong skills in HTML, CSS, JavaScript, Node.js, and various other tools and frameworks. Staying updated with industry trends and exploring new technologies keeps me inspired and sharp.

      One of my key achievements is deploying a chess project on Vercel. Using EJS for the frontend, this project highlights my ability to integrate backend logic with dynamic user interfaces. I’ve also worked with the Google Maps API, learning the importance of third-party integrations to enhance user experiences. Currently, I’m exploring WebRTC to build a real-time communication project similar to Google Meet or Zoom, diving deep into signaling servers, peer-to-peer connections, and real-time protocols.

     Outside of development, I find inspiration in reading. The Alchemist by Paulo Coelho, one of my favorite books, encourages me to follow my dreams and embrace the journey of discovery. This mindset fuels my resilience and creativity in tackling challenges.

     I’m preparing for job interviews, aiming to step into the professional world as a full-stack developer. My goal is to join a dynamic team where I can contribute my skills while continuing to grow and learn.

      If you're looking for a dedicated developer with technical expertise and a passion for innovation, let's connect and build something amazing together!</p>
      
      </div>  
     </div>
      
    </div>
  )
 
}

export default About
