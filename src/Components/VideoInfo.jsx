import React from 'react'

const VideoInfo = ({title,desc}) => {
  return (
    
      <div className='py-[300px] px-6 relative bg-gradient-to-r from-black h-screen w-[1/4] '>
        <h1 className='  text-white hover:text-red-500 px-10 font-bold text-7xl'>{title}</h1>
        <p className=' text-white px-10 mt-6 w-[450px] font-serif'>{desc}</p>
        <div className=' bg-transparent absolute flex gap-5  mt-10 w-[370px] justify-center'>
          <button className=' text-white hover:bg-red-500 bg-transparent bg-slate-500  px-10 py-2 rounded-lg '>Play </button>
          <button className=' text-white  hover:bg-red-500  bg-slate-500 px-10 py-2 rounded-lg  ' >More Info </button>
        </div>
      </div>
    
  )
}

export default VideoInfo