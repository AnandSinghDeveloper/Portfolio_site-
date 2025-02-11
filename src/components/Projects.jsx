import React from 'react';

const projects = [
  {
    id: 1,
    title: "Chess Game",
    description: "A backend project deployed on Vercel, using EJS for the frontend.",
    techStack: ["Node.js", "EJS", "Vercel"],
    link: "#",
  },
  {
    id: 2,
    title: "Google Maps Integration",
    description: "A project demonstrating location services and map integration.",
    techStack: ["React", "Google Maps API"],
    link: "#",
  },
  {
    id: 3,
    title: "WebRTC Video Chat",
    description: "A real-time communication app similar to Google Meet or Zoom.",
    techStack: ["WebRTC", "React", "Socket.io"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="w-full min-h-screen p-10 bg-gray-50 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-xl shadow-lg p-6 bg-white hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
              <span className="font-semibold text-gray-700">Tech Stack:</span>
              <ul className="list-disc list-inside text-gray-600">
                {project.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
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
