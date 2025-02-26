import React from 'react'

const Header = ({children}) => {
  return (
    <div className='text-center text-3xl md:text-4xl xl:text-5xl font-bold text-[#170e4f] py-5 my-10'>
      {children} 
    </div>
  )
}

export default Header
