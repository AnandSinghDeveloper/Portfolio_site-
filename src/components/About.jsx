import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const animationControls = useAnimation();

  return (
    <motion.div
      className="h-screen w-full  relative main bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-[50%] h-20 absolute bottom-0 left-[20%] rounded-2xl flex items-center justify-center"
        animate={animationControls}
      >
        <h2 className="text-4xl font-bold text-gray-600 hover:scale-120 transition-transform duration-300 hover:text-gray-800">Technology</h2>
      </motion.div>

      <motion.div
        className="h-[80%] w-[90%] absolute top-[-3%] left-[5%] rounded-2xl about shadow-xl bg-gray-200  "
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="bg-[url(public/download.png)] bg-contain bg-center opacity-20 w-full h-full relative"></div>

        <motion.div
          className="absolute top-[10%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-center text-3xl text-purple-900 font-semibold pt-5">
            About me!
          </h3>
          <p className="p-5 font-medium text-lg text-zinc-900">
            Hello! My name is Aanand, and I am a passionate full-stack developer
            with a love for technology, creativity, and continuous learning. I
            enjoy building intuitive and functional solutions that solve
            real-world problems and create meaningful user experiences. With
            expertise in both frontend and backend development, I strive to
            deliver seamless and impactful applications.
            <br />
            My journey in coding began with a curiosity for technology, which
            soon transformed into a passion for creating interactive and robust
            systems. Over time, I have developed strong skills in HTML, CSS,
            JavaScript, Node.js, and various other tools and frameworks. Staying
            updated with industry trends and exploring new technologies keeps me
            inspired and sharp.
            <br />
            One of my key achievements is deploying a chess project on Vercel.
            Using EJS for the frontend, this project highlights my ability to
            integrate backend logic with dynamic user interfaces. I've also
            worked with the Google Maps API, learning the importance of
            third-party integrations to enhance user experiences.
            <br />
            Outside of development, I find inspiration in reading. *The
            Alchemist* by Paulo Coelho, one of my favorite books, encourages me
            to follow my dreams and embrace the journey of discovery. This
            mindset fuels my resilience and creativity in tackling challenges.
            <br />
            I'm preparing for job interviews, aiming to step into the
            professional world as a full-stack developer. My goal is to join a
            dynamic team where I can contribute my skills while continuing to
            grow and learn.
            <br />
            <br />
            If you're looking for a dedicated developer with technical expertise
            and a passion for innovation, let's connect and build something
            amazing together!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;

