import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/swiper-bundle.css"
import SwiperBtn from '../Components/SwiperBtn';
import { shopData } from '../Data/ShopData';
import { TbCoinTaka } from 'react-icons/tb';









const ShopDS = () => {
  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        400: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        800: {
            slidesPerView: 3
        },
        1000: {
            slidesPerView: 4
        },
    }
}
  return (
    <div className='overflow-hidden'> 
      {/* header section  */}
      <div className='flex flex-col gap-3 justify-between items-start mb-5'>
        <h2 className='text-3xl font-bold text-yellow-500 '>Special Offer </h2>
        <p className='w-[400px]  text-md text-slate-500 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore veniam quas fuga quos atque, animi optio suscipit quidem dolor!</p>
      </div>
      <Swiper
      style={{padding: '20px', overflow: 'visible'}}
      
      {...swiperSettings}
    >
      <div className='absolute top-[-50px] right-0'>
        <SwiperBtn/>
      </div>
      {shopData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='bg-slate-100 p-3 m-2 relative rounded-xl shadow-md shadow-blue-300 grid grid-cols-[2fr_4fr] gap-4 hover:scale-105 transition-all duration-300 h-[150px]'>
            <div className='absolute top-[-20px] left-[-20px] bg-red-500 text-white flex items-center w-fit gap-3 text-xl font-bold px-3 rounded-lg'>
              <div className='line-through flex items-center'>{item.price}<TbCoinTaka/></div>
              <div className=' flex items-center'>{item.specialPrice}<TbCoinTaka/></div>
            </div>
            <img src={item.img} alt={item.title} className='h-full w-full object-cover rounded-md' />
            <div className='flex flex-col justify-between items-start'>
              <h4 className='text-xl font-bold text-yellow-500'>{item.title}</h4>
              <p className="text-md leading-5 text-slate-600 line-clamp-2">{item.details}</p>
              {/* btn  */}
              <button className='bg-yellow-400 text-white font-semibold py-1 px-2 rounded-md '>Order Now</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default ShopDS





