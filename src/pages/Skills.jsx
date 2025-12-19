import React from "react";
import SkillCard from "../components/SkillsCard";
import { motion as Motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, } from "react-icons/fa";
import { SiTailwindcss, SiFastapi } from "react-icons/si";
import { FaFlutter, FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiMongodb  } from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-teal-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-teal-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-teal-400" /> },
      { name: "React", icon: <FaReact className="text-teal-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />,},
      { name: "Flutter", icon: <FaFlutter className="text-teal-400"/>},
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", icon: <FaPython className="text-teal-300" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
      { name: "Node JS", icon: <FaNodeJs className="text-teal-400"/>},
      { name: "Express JS", icon: <SiExpress className="text-teal-400"/>},
    ],
  },
  {
    category: "Tools & Database",
    skills: [
        { name: "Git", icon: <FaGitAlt className="text-teal-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-teal-500" /> }
    ],
  },
];

function Skills() {
  return (
    <section className="bg-black text-white py-16 px-6" id="skills">
      <Motion.h2 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }}
      transition={{duration: 0.2, delay:0.1}} viewport={{ once: true }}
      className="text-4xl font-bold ps-10 bg-linear-to-r from-teal-500 to-blue-500 inline-block text-transparent bg-clip-text mb-12">Skills</Motion.h2>
      <div className="max-w-5xl mx-10 space-y-12">
        {skillsData.map((group, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-6">{group.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {group.skills.map((skill, i) => (
                <SkillCard key={i} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
