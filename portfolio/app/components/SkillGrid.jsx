import {motion} from "motion/react"


const skills = [
  { name: "Python", iconClass: "devicon-python-plain" },
  { name: "Tailwind", iconClass: "devicon-tailwindcss-plain" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain" },
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
  { name: "Nginx", iconClass: "devicon-nginx-original" },
  { name: "jQuery", iconClass: "devicon-jquery-plain" },
  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
];

export default function SkillGrid() {
  return (
    <div id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
  {/* Section Heading */}
  <motion.div
    className="text-center mb-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 font-ovo">
      Tech <span className="text-green-500">Stack</span>
    </h2>
    <p className="text-gray-400 md:w-7/12 sm:w-9/12 w-10/12 mx-auto text-sm sm:text-base">
      Programming languages, frameworks, and apps I work with.
    </p>
  </motion.div>

  {/* Skills Grid */}
 <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4">
  {skills.map((skill) => (
    <div
      key={skill.name}
      className="group flex flex-col items-center relative"
    >
      {/* Tech name above the icon, hidden by default */}
      <span className="absolute -top-5 text-gray-300 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {skill.name}
      </span>

      {/* Icon card */}
      <div className="bg-[#252a41] rounded-xl flex items-center justify-center p-3 sm:p-4 h-24 sm:h-32 md:h-36 w-24 sm:w-32 md:w-36 transition-all duration-300 cursor-pointer">
        <i
          className={`${skill.iconClass} text-3xl sm:text-5xl md:text-5xl text-gray-300 group-hover:text-green-600 transition-colors duration-300`}
        ></i>
      </div>
    </div>
  ))}
</div>

</div>
  );
}
