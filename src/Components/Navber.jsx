import React from 'react'
import { navbars } from '../Data/Data'
import { BiSearch } from 'react-icons/bi'
import { BsSun } from 'react-icons/bs'
import { CiDark } from 'react-icons/ci'

const Navber = ({light, setLight}) => {
  return (
    <div className={` ${light ? "text-black bg-blue-300" : " text-white bg-blue-900" } py-3 `}>
      {/* container section  */}
        <div className='w-[80%] mx-auto flex justify-between items-center gap-5 py-1'>
            {/* logo section  */}
            <div className='text-2xl font-bold'>
                <a href="/">Logo</a>
            </div>
            {/* navber section  */}
            <div className='flex items-center justify-center gap-4'>
                {navbars.map((item, index)=>(
                    <div className='text-lg font-semibold hover:underline hover:text-yellow-400 transition-all duration-300 active:text-red-600 focus:bg-red-400' key={index}>
                        <a href={item.link}>
                            {item.name}
                        </a>
                    </div>
                ))}
            </div>
            {/* search and light button  */}
            <div className='flex items-center justify-center gap-2'>
                {/* search bar  */}
                <div className='py-1 px-3 bg-white text-black flex items-center justify-center rounded-lg'>
                    <input type="text" name="" id="" className='outline-none text-md ' />
                    <button>
                        <BiSearch/>
                    </button>
                </div>
                {/* light btn  */}
                <div>{light ? <button onClick={()=>setLight(false)}><BsSun/></button> : <button onClick={()=>setLight(true)}><CiDark/></button>}</div>
                {/* auth user name  */}
            </div>
        </div>
    </div>
  )
}

export default Navber
