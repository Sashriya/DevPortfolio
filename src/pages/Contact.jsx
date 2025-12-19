import React from 'react'
import { motion as Motion } from "framer-motion";

function Contact() {
  return (
    <div className='bg-black text-white flex flex-col px-4 py-10 md:px-20 gap-10'>
        <Motion.div initial={{opacity:0, x:500}} whileInView={{opacity:1, x:0}}
        transition={{delay:0.1, duration:0.2, ease:'easeOut'}}>
            <h1 className='text-3xl bg-linear-to-r from-blue-600 to-teal-500 inline-block w-28 text-transparent bg-clip-text font-bold italic'>Contact</h1>
            <div className='flex flex-col w-full md:max-w-6xl gap-5 p-8 bg-gray-900 rounded-2xl mt-7'>
                <label className='text-xl font-bold italic'>Name:</label>
                <input type="text" placeholder='Enter your Name' className='p-3 bg-gray-700 rounded-lg' />
                <label className='text-xl font-bold italic'>Email:</label>
                <input type="email"  placeholder='Enter your Email' className='p-3 bg-gray-700 rounded-lg' />
                <label className='text-xl font-bold italic'>Message</label>
                <textarea rows={4} className='p-3 bg-gray-700 rounded-lg resize-none' placeholder='Enter Your Message' />
            </div>
        </Motion.div>
    </div>
  )
}

export default Contact
