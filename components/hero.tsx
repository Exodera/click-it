import React from 'react'

const hero = ({ heading , message}) => {
  return (
    <div className='flex justify-center items-center h-screen bg-fixed bg-center bg-cover custom-img mb-10 z-0'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        
        <div className='z-[2] text-white ml-[-10rem] mt-[-7rem]'>
            <h2 className='text-5xl font-bold' >{heading}</h2>
            <p className='py-5'>{message}</p>
            <button className='border text-xl px-5 py-1'>Explore</button>
        </div>

    </div>
  )
}

export default hero