import React from 'react'
import PageView from '../Components/PageView'
import Image from "../assets/contact.png"

const Contact = ({light}) => {
  return (
    <div>
      <PageView light={light} title={"Contact With Us!"}/>
      {/* container section  */}
      <div className='w-[80%] mx-auto my-[100px] bg-slate-300 rounded-xl py-[50px] grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-5'>
        {/* image section  */}
        <div className='flex items-center justify-center'>
          <img src={Image} alt="" />
        </div>
        {/* contact form section  */}
        <form className='m-2 space-y-3 text-lg'>
          {/* name section  */}
          <div className='flex gap-4 items-center justify-between '>
            <input type="text" name="" id="" placeholder='FirstName...' className='w-full py-1 px-3 rounded-md outline-none' />
            <input type="text" name="" id="" placeholder='LastName...' className='w-full py-1 px-3 rounded-md outline-none' />
          </div>
          {/* eamil section  */}
          <input type="email" name="" id="" placeholder='Enter email...'className='w-full py-1 px-3 rounded-md outline-none' />
          {/* text box  */}
          <textarea name="" id="" placeholder='Message...' className='w-full h-[150px] py-2 ps-4 rounded-lg outline-none'></textarea>
          {/* send button area  */}
          <button className='text-xl font-bold text-white bg-blue-800 w-full py-2 rounded-lg hover:bg-blue-400 duration-200 transition-all'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
