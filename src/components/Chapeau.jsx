import React from 'react'
import Icon from './Icon'

const Chapeau = () => {
  return (
    <div>
        <Icon 
        rotated = 'true'
        h = '60'
        w = '60'
             />
        <h1 className='text-5xl my-8 font-semibold'>
            Chapeau
        </h1>
        <h2 className='mb-8'>
            Winning a hat has never been so easy....
        </h2>
        <button className='rounded-full text-white bg-red-500 w-36 h-10'>
            Start Lottery
        </button>
    </div>
  )
}

export default Chapeau