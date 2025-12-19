import React from 'react'
import GDG from '../assets/GDG2cer.jpeg'

function CerCards(props) {
  return (
    <div>
      <div className='flex flex-col gap-2 p-6 border-2 border-gray-600 rounded-2xl'>
        <img src={props.img} className='w-80 h-50 rounded-2xl' />
        <p className='text-sm font-semibold mt-2'>{props.description}</p>
      </div>
    </div>
  )
}

export default CerCards
