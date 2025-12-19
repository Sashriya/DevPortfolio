import React from "react";
import { motion as Motion } from "framer-motion";

function AboutSec() {
  return (
    <div className="text-white space-y-4 flex flex-col p-10">
      <Motion.h2
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="text-4xl mb-5 bg-linear-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text p-1.5 font-bold italic"
      >
        About Me
      </Motion.h2>
      <Motion.p
        key="about paragraph"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
        className="text-lg font-semibold"
      >
        Computer Science Engineering student and aspiring Software Developer
        with strong proficiency in front-end development, web application
        development, and user interface (UI) design. Experienced in building
        responsive, user-centric, and performance-optimized web applications
        using modern technologies. Developed a cloth donation platform that
        connects donors with underserved communities, demonstrating skills in
        problem-solving, real-world application development, and social impact
        projects. Highly motivated to contribute to collaborative team
        environments, continuously learn new technologies, and deliver
        high-quality software solutions.
      </Motion.p>
    </div>
  );
}

export default AboutSec;
