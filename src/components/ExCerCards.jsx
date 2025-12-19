import React from 'react'
import GDG from '../assets/GDG2cer.jpeg'

function ExCerCards() {
  return (
    <div>
      <div className='gap-10 grid grid-cols-1 md:grid-cols-3 p-10'>
            <div className='flex flex-col gap-2 p-6 border-2 border-gray-600 rounded-2xl'>
              <img src={GDG} alt="Prop" className='w-80 h-50' />
              <h1 className='text-2xl font-bold'>title</h1>
              <p className='text-xl'>Description</p>
            </div>
          </div>
    </div>
  )
}

export default ExCerCards
