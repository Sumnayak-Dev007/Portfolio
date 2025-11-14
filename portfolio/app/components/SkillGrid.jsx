import { motion } from "motion/react";
import { useState } from "react";

const skills = [
  { name: "Python", iconClass: "devicon-python-plain" },
  { name: "Tailwind", iconClass: "devicon-tailwindcss-plain" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain" },
  { name: "TypeScript", iconClass: "devicon-typescript-plain" },
  { name: "HTML", iconClass: "devicon-html5-plain" },
  { name: "Bootstrap", iconClass: "devicon-bootstrap-plain" },
  { name: "ReactJS", iconClass: "devicon-react-original" },
  { name: "MySQL", iconClass: "devicon-mysql-plain" },
  { name: "Django", iconClass: "devicon-django-plain" },
  { name: "AWS", iconClass: "devicon-amazonwebservices-plain" },
  { name: "C", iconClass: "devicon-c-plain" },
  { name: "C++", iconClass: "devicon-cplusplus-plain" },
  { name: "Git", iconClass: "devicon-git-plain" },
  { name: "GitHub", iconClass: "devicon-github-original" },
  { name: "Docker", iconClass: "devicon-docker-plain" },
  { name: "jQuery", iconClass: "devicon-jquery-plain" },
  { name: "Linux", iconClass: "devicon-linux-plain" },

];

export default function SkillGrid() {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleClick = (name) => {
    setActiveSkill((prev) => (prev === name ? null : name));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={ { duration: 1 }}
      id="skills"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20"
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 font-ovo">
          Tech <span className="text-green-500">Stack</span>
        </motion.h2>
        <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-gray-400 md:w-7/12 sm:w-9/12 w-10/12 mx-auto text-sm sm:text-base">
          Programming languages, frameworks, and apps I work with.
        </motion.p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
      className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {skills.map((skill) => {
          const isActive = activeSkill === skill.name;
          return (
            <motion.div
              key={skill.name}
              className="group flex flex-col items-center relative"
              onClick={() => handleClick(skill.name)}
            >
              {/* Skill name */}
              <span
                className={`absolute -top-7 sm:-top-6 text-[10px] sm:text-xs font-semibold transition-opacity duration-300 ${
                  isActive
                    ? "opacity-100 text-green-500"
                    : "opacity-0 text-gray-300 group-hover:opacity-100"
                }`}
              >
                {skill.name}
              </span>

              {/* Icon card */}
              <div
                className={`rounded-xl flex items-center justify-center p-2 sm:p-4 h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 transition-all duration-300 cursor-pointer bg-[#252a41]
                  ${isActive ? "ring-2 ring-green-500 scale-105" : ""}`}
              >
                <i
                  className={`${skill.iconClass} text-2xl sm:text-4xl md:text-5xl transition-colors duration-300
                    ${
                      isActive
                        ? "text-green-500"
                        : "text-gray-300 group-hover:text-green-600"
                    }`}
                ></i>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
