const Projects = () => {
  const projectList = [
    {
      name: "Crime Portal",
      liveDemo: "https://crimepetrol.netlify.app/",
      github: "https://github.com/manojRawat5/B41_WEB_033_Responsive-Rebels",
    },
    {
      name: "E-commerce UI",
      liveDemo: "https://delicate-kleicha-23127a.netlify.app/",
      github: "https://github.com/Ankit-Khairwal/My-Website",
    },
    {
      name: "Real State",
      liveDemo: "https://dashboard-app.com",
      github: "https://github.com/yourusername/dashboard-app",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-primary text-accent">
      <h2 className="text-3xl font-bold text-accent-800 text-center">
        Projects
      </h2>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="w-80 p-4 bg-gray-100 rounded-lg shadow-md text-center"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <div className="mt-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                Live Demo
              </a>
              |
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 font-semibold hover:underline ml-2"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
