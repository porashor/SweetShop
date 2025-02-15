import React from 'react'
import Banner1 from "../assets/banner1.png"




const Banner = ({light}) => {
  return (
    <div className={` ${light ? "text-black bg-blue-300" : " text-white bg-blue-900" } py-3 `}>
      {/* container section  */}
      <div className='w-[80%] h-[100vh] mx-auto py-5 flex items-center justify-between gap-5'>
        {/* details section  */}
        <div className='space-y-4 '>
            <h1 className='font-bold leading-6 font-sans text-3xl md:text-4xl lg:text-5xl xl:text-6xl space-y-4'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase text-yellow-400'>We</h1> 
                <h1>provides a lots</h1> 
                <h1>of delitious sweet</h1>
            </h1>
            <p className='text-lg font-semibold py-5 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, magnam.</p>
            <button className={` ${light ? "bg-blue-500" : "bg-blue-950"} py-2 px-5 text-xl font-bold text-white rounded-xl hover:scale-105 duration-200 transition-all`}>Buy now</button>
        </div>
        {/* image section  */}
        <div className='flex items-center justify-center'>
            <img src={Banner1} alt=""  className='animate-spin duration-[3000ms]'/>
        </div>
      </div>
    </div>
  )
}

export default Banner
