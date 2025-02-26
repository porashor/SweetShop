import React from 'react'
import bg from '../assets/bg.jpg'





const BestCake = () => {
  const bgStyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <div style={bgStyles} className='z-0 bg-gray-100 py-10 my-10 relative '>
      {/* overlay section  */}
      <div className='absolute bg-[#00000093] w-full h-full top-0 left-0 -z-10'></div>
      {/* container section  */}
      <div className='w-[80%] mx-auto py-10 z-100'>
        {/* header section  */}
        <h1 className='text-4xl font-bold text-center text-yellow-600'>We make it delicious food to eat</h1>
        {/* order btn section  */}
        <div className='flex items-center justify-center w-full pt-10 '>
          <button className='border-2 py-2 px-7 text-xl text-yellow-600 uppercase font-bold text-center '>order now </button>
        </div>
      </div>
    </div>
  )
}

export default BestCake
