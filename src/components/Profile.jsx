import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { motion as Motion, AnimatePresence } from "framer-motion";
import ProfileInfo from "./ProfileInfo";

function Profile() {

  const texts = [
    "Web Developer",
    "App Developer",
    "AI Engineer",
    "Creative Designer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Motion.div
      key="hero"
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-3 text-white"
    >
      <h2 className="md:text-5xl text-4xl font-bold italic">
        Hi! I'm <span className="text-teal-500"> Sashriya M </span>
      </h2>
      <p className="text-3xl text-white font-semibold italic">
        <AnimatePresence mode="wait">
          <Motion.span
            key={texts[index]}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.4 }}
          >
            {texts[index]}
          </Motion.span>
        </AnimatePresence>
      </p>
      <ProfileInfo />
      <div className="flex space-x-3">
        <a
          href="https://github.com/Sashriya"
          target="_blank"
          className="text-white hover:text-teal-400"
        >
          <FaGithubSquare size={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/sashriya-m/"
          target="_blank"
          className="text-white hover:text-teal-400"
        >
          <FaLinkedin size={35} />
        </a>
        <a
          href="https://www.instagram.com/_sashrii_2005_/"
          target="_target"
          className="text-white hover:text-teal-400"
        >
          <FaSquareInstagram size={35} />
        </a>
      </div>
    </Motion.div>
  );
}

export default Profile;
