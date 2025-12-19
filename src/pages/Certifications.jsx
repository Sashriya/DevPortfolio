import React from 'react'
import CerCards from '../components/CerCards'
import cer1 from '../assets/GDGcer.jpg'
import cer2 from '../assets/GDG2cer.jpeg'
import cer3 from '../assets/hack.jpg'
import cer4 from '../assets/Webhackcer.jpg'
import Ecer1 from '../assets/marathon1.jpg'
import Ecer2 from '../assets/marathon2.jpg'
import Ecer3 from '../assets/marathon3.jpg'
import Ecer4 from '../assets/marathon4.jpg'
import ECCerCards from '../components/ECCerCards'
import { motion as Motion } from "framer-motion";

function Certifications() {
  return (
    <div className='flex flex-col bg-black text-white p-4' id='certifications'>
        <div>
            <Motion.h2 initial={{opacity:0, x:-100}} whileInView={{opacity:1, x:0}}
            transition={{delay:0.1, duration:0.2, ease:'easeOut'}}
            className='text-2xl font-bold italic bg-linear-to-r from-blue-500 to-teal-500 inline-block text-transparent bg-clip-text ps-10'>Hackathons</Motion.h2>
            <Motion.div initial={{opacity:0, x:100}} animate={{opacity:1, x:0}}
            transition={{delay:0.2, duration:0.2, ease:'easeOut'}}
            className='gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10'>
                <CerCards img={cer1} description="Participated in the GDG Solution Challenge, presenting an innovative idea focused on solving real-world problems through technology." />
                <CerCards img={cer2} description="Recognized for active participation and contributions to GDG activities at KSR Institute for Engineering and Technology." />
                <CerCards img={cer3} description="Participated in the Future X Hackathon 2025, gaining experience in collaborative problem-solving and rapid ideation." />
                <CerCards img={cer4} description="Completed a 48-hour online web development hackathon, strengthening practical development and problem-solving skills." />
            </Motion.div>
            <h2 className='text-2xl font-bold italic bg-linear-to-r from-blue-500 to-teal-500 inline-block text-transparent bg-clip-text ps-10'>Extracurricular</h2>
            <Motion.div initial={{opacity:0, x:100}} animate={{opacity:1, x:0}}
            transition={{delay:0.3, duration:0.2, ease:'easeOut'}} 
            className='gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-10'>
                <ECCerCards img={Ecer1} description="Successfully completed a 10 KM cross-country run, demonstrating endurance and fitness commitment." />
                <ECCerCards img={Ecer2} description="Completed the 10 KM category in the KSR Mini Marathon promoting drug awareness and SDGs." />
                <ECCerCards img={Ecer3} description="Received appreciation for participating in the Ilanthalir Marathon supporting health and social awareness." />
                <ECCerCards img={Ecer4} description="Completed a 10K run in the Ultimate Karur Marathon supporting mental health awareness." />
            </Motion.div>
        </div>
    </div>
  )
}

export default Certifications
