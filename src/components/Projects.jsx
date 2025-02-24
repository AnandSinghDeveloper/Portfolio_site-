import React from 'react';

const projects = [
  {
    id: 1,
    title: "Chess Game",
    description: "A web-based chess game with responsive design, multiplayer functionality, move validation, game history tracking, and an intuitive interface.",
    techStack: ["Node.js ,","EJS ,","Socket.io ,","Express.js"],
    link: "https://github.com/AnandSinghDeveloper/Chess_game-",
    img : "https://img.freepik.com/free-vector/chessboard-concept-illustration_114360-23401.jpg?t=st=1739278137~exp=1739281737~hmac=d9393808685b3436a705cd61c8d64de3c83e1743fcdc9bf3173d75db083a422f&w=1060"
  },
  {
    id: 2,
    title: "Empoloyee Management System",
    description: "A React-based Employee Management System using LocalStorage for data storage, styled with Tailwind CSS for responsiveness..",
    techStack: ["React", "localstorage"],
    link: "https://github.com/AnandSinghDeveloper/Employee-management-system-",
    img: "https://img.freepik.com/free-vector/business-team-brainstorming-new-idea-success-get-new-idea-solving-problem_24797-1559.jpg?t=st=1740372881~exp=1740376481~hmac=0345bc8b6e12decbbe1db727324689fa068824cb5fa5eb8d67b1315218640e69&w=1380"
  },
  {
    id: 3,
    title: "Dairy writing app",
    description: "A Diary Writer application built with Node.js and EJS, enabling users to write, save, and manage entries seamlessly.",
    techStack: ["Ejs ,", "Node.js ,", "Express.js"],
    link: "#",
    img : "https://img.freepik.com/free-vector/taking-notes-concept-illustration_114360-1114.jpg?t=st=1740373064~exp=1740376664~hmac=ba4fd76679bfe55db5d009f4789c73b4e4f359366da6fc5724aa5a1a3d680c35&w=900"
  },
  {
    id: 3,
    title: "Password Generator",
    description: "A Password Generator built with React js and tailwind, creating secure, customizable passwords with options for length and character types.",
    techStack: [" React js", "Tailwind css"],
    link: "https://github.com/AnandSinghDeveloper/Password_Generator-",
    img:"https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1740373154~exp=1740376754~hmac=2362255df7754e18458d7a9d03703a61963d4552fcbb6f35e4076eafda2691f3&w=900"
  },
  {
    id: 3,
    title: "Mini Spotify",
    description: "A Spotify-inspired project built with Vanilla JavaScript, offering music playback, dynamic playlists, and interactive user controls..",
    techStack: ["html ,", "css ,","javascript"],
    link: "https://github.com/AnandSinghDeveloper/spotify_miniProject",
    img:"http://pluspng.com/img-png/spotify-logo-png-spotify-vector-logo-720.png"
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description: "A Tic Tac Toe game built with Vanilla JavaScript, featuring interactive gameplay, dynamic UI updates, and win detection..",
    techStack: ["Html ,", "Css ,", "Javascript"],
    link: "https://github.com/AnandSinghDeveloper/Tic-Tac-Toe",
    img:"https://img.freepik.com/free-vector/hands-holding-pencils-play-tic-tac-toe-people-drawing-crosses-noughts-simple-game-children-flat-vector-illustration-strategy-concept-banner-website-design-landing-web-page_74855-24786.jpg?t=st=1740373264~exp=1740376864~hmac=ddbfb0f8dddc9ea4f9d3f7fb9073166996caa32caac679256718831f210e5c21&w=740"
  },
];

const Projects = () => {

  
  return (
    <section className="w-full min-h-screen p-10  flex flex-col items-center bg-zinc-100">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 hover:scale-120 transition-transform duration-300 hover:text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl  ">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" rounded-xl shadow-xl p-6  hover:scale-105 transition-transform duration-300 relative "
          >
            <div className=' w-full h-full  absolute top-0 left-0 object-contain opacity-30  object-top overflow-hidden'>
            <img className='w-full h-full object-contain' src={project.img} alt="project" />
            </div>
            <h3 className="text-2xl font-semibold mb-4  text-gray-700">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
              <span className="font-semibold text-gray-700">Tech Stack :
              <span className=" px-2 font-medium text-sm  text-gray-600">
                {project.techStack.map((tech, index) => (
                  <span className="mr-2 " key={index}>{tech}</span>
                ))}
              </span>
              </span>
            </div>
            <a
              href={project.link}
              target="_blank"
              
              className="text-blue-400  hover:text-blue-600"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
