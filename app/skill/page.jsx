import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-900 text-5xl" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-blue-400 text-5xl" />,
    },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
  ];

  return (
    <section className="py-16 bg-accent-100 text-center">
      <h2 className="text-3xl font-bold text-blue-800">My Tech Stack</h2>
      <p className="text-lg text-blue-600 mt-2">Technologies I work with:</p>

      {/* Tech Stack with Icons */}
      <div className="flex flex-wrap justify-center mt-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-accent shadow-md rounded-lg"
          >
            {skill.icon}
            <span className="mt-2 text-gray-800 font-semibold">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
