import React from "react";
import { motion as Motion } from "framer-motion";

function SkillsCard({ name, icon }) {
  return (
    <Motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }}
      transition={{duration: 0.2, delay:0.2}} viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-700"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-sm font-semibold">{name}</p>
    </Motion.div>
  );
}

export default SkillsCard;
