import React from 'react'
import { motion as Motion } from "framer-motion";
import ProjectCard from '../components/ProjectCard'
import Resume from '../assets/resume.png'
import Student from '../assets/students.png'
import cursor from '../assets/cursor.png'
import VC from '../assets/vendorconnect.png'
import HP from '../assets/hopefoundation.png'
import Chatbot from '../assets/chatbot.png'

function Project() {
  return (
    <div className='bg-black text-white p-10'>
      <Motion.h1 initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}}
      transition={{duration:0.2, delay:0.1, ease:'easeOut'}}
      viewport={{once:true, amount:0.5}} 
      className='text-2xl font-bold italic mb-10 inline-block bg-linear-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text'>My Projects</Motion.h1>
      <div className='flex flex-col items-center'>
        <Motion.div initial={{opacity:0, x:100}} animate={{opacity:1, x:0}}
        transition={{duration:0.2, delay:0.2, ease:'easeOut'}}
        viewport={{once:true, amount:0.5}}
        className='space-x-6 gap-10 grid grid-cols-1 md:grid-cols-3'>
            <ProjectCard img={Resume} title="AI Resume Analyzer" url="https://github.com/Sashriya/Resume-Checker" />
            <ProjectCard img={Student} title="AI Students Performance Analyzer" url="https://github.com/Sashriya/Students-Performance-Analyzer" />
            <ProjectCard img={cursor} title="Eye Cursor Control" url="https://github.com/Sashriya/DhoorDarshan" />
            <ProjectCard img={Chatbot} title="AI Chatbot" url="https://github.com/Sashriya/Mr.Mechano" />
            <ProjectCard img={VC} title="Vendor Connect" url="https://vender-connect.vercel.app/" />
            <ProjectCard img={HP} title="Hope foundations" url="https://hopefoundations.vercel.app/" />
        </Motion.div>
        <button className='py-2 px-10 bg-teal-500 m-10 rounded-full text-xl font-bold shadow-sm shadow-teal-500'><a href="https://github.com/Sashriya?tab=repositories" target='_blank'>Explore GitHub</a></button>
      </div>
    </div>
  )
}

export default Project
