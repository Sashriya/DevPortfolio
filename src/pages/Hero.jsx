import React from "react";
import Profile from "../components/Profile";
import profile from "../assets/profile.jpg";
import { motion as Motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <section
        className="flex flex-col-reverse md:flex-row justify-between items-center p-6 md:p-20 bg-black gap-15"
      >
        <Profile />
        <Motion.img 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          src={profile}
          alt="Profile"
          className="md:w-104 w-80 border-2 border-gray-600 shadow-lg shadow-teal-500 rounded-2xl"
        />
      </section>
    </div>
  );
}

export default Hero;
