import React from 'react'

function ProjectCard(props) {
  return (
    <div>
        <div className='flex flex-col items-center p-6 justify-center border-2 border-gray-500 rounded-2xl'>
            <img src={props.img} alt={props.title} className='w-100 h-50 rounded-xl object-cover' />
            <h1 className='text-lg font-semibold mt-5'>{props.title}</h1>
            <button className='bg-teal-500 w-full py-2 px-10 mt-5 m-2 rounded-2xl shadow-sm shadow-teal-500 font-bold text-lg'><a href={props.url} target='_blank'>Explore now</a></button>
        </div>
    </div>
  )
}

export default ProjectCard
