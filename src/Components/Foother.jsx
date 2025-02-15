import React from 'react'
import { BiMessage } from 'react-icons/bi'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa6'
import { navbars } from '../Data/Data'

const Foother = ({light}) => {
  return (
    <div>
      {/* upper footer  */}
      <div className={` ${light ? "text-black bg-blue-300" : " text-white bg-blue-900" } py-3 `}>
        {/* container  section  */}
        <div className='w-[80%] mx-auto py-5 text-center space-y-5'>
            {/* icon section  */}
            <div className='flex text-white items-center justify-center gap-5 text-2xl '>
                <div className='bg-blue-400 p-2 rounded-full'>
                    <FaFacebook/>
                </div>
                <div className='bg-blue-400 p-2 rounded-full'>
                    <BiMessage/>
                </div>
                <div className='bg-blue-400 p-2 rounded-full'>
                    <BsInstagram/>
                </div>
                <div className='bg-blue-400 p-2 rounded-full'>
                    <FaWhatsapp/>
                </div>
                <div className='bg-blue-400 p-2 rounded-full'>
                    <BsTwitter/>
                </div>
            </div>
            {/* nav section  */}
            <div className='flex items-center justify-center gap-3 text-xl font-semibold'>{navbars.map((item, index)=>(
                <div key={index}>
                    <a href={item.link}>{item.name}</a>
                </div>
            ))}</div>
        </div>
      </div>
      {/* lower foother  */}
      <div className='bg-slate-900 text-white py-4 px-5 flex items-center justify-between'>
        <div>@All type of copyright reserved by Parashar Das</div>
        <div className=' p-2 rounded-full bg-blue-300 text-black'>
            <FaFacebook/>
        </div>
      </div>
    </div>
  )
}

export default Foother
