import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaSquareInstagram, FaLinkedin  } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {motion as Motion} from 'framer-motion'
import ProfileInfo from './ProfileInfo';


function Profile() {
  return (
    <Motion.div
    key='hero' initial={{opacity:0, x:-150}} whileInView={{opacity:1, x:0}}
    transition={{delay:0.1, duration:0.3, ease:'easeOut'}}
    viewport={{once:true, amount:0.2}}
     className='flex flex-col gap-3 text-white'>
      <h2 className='md:text-5xl text-4xl font-bold italic'>Hi! I'm <span className='text-teal-500'> Sashriya M </span></h2>
      <p className='text-2xl font-semibold italic'>
        <TypeAnimation sequence={[
            "Web Developer", 3000,
            "App Developer", 3000,
            "AI Engineer", 3000,
            "Creative Designer", 3000,
        ]}
        wrapper='span' speed={50} repeat={Infinity} />
      </p>
      <ProfileInfo />
      <div  className='flex space-x-3'>
        <a href="https://github.com/Sashriya" target='_blank' className='text-white hover:text-teal-400' ><FaGithubSquare size={35}/></a>
        <a href="https://www.linkedin.com/in/sashriya-m-b2013a296/" target='_blank' className='text-white hover:text-teal-400' ><FaLinkedin size={35}/></a>
        <a href="https://www.instagram.com/_sashrii_2005_/" target='_target' className='text-white hover:text-teal-400' ><FaSquareInstagram size={35}/></a>
      </div>
    </Motion.div>
  )
}

export default Profile
