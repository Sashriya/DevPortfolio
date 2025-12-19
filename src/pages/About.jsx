import React from 'react'
import girl from '../assets/girl.jpg'
import {motion as Motion} from 'framer-motion'
import Aboutsec from '../components/Aboutsec'

function About() {
  return (
    <div className='flex justify-between items-center bg-black md:p-10 p-5 gap-20'>
      <Aboutsec />
      <Motion.img
      key='image' initial={{opacity:0, x:100}} animate={{opacity:1, x:0}}
      transition={{delay:0.3, duration:0.2, ease:'easeOut'}}
       src={girl} alt="Girl" className='w-148 h-130 hidden lg:block'/>
    </div>
  )
}

export default About
