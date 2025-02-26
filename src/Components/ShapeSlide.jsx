import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { shapeData } from '../Data/Data';
import SwiperBtn from '../Components/SwiperBtn';



const ShapeSlide = () => {
  return (
    <div className='my-10'>
      {/* container section  */}
      <div className='py-10 mx-auto w-[80%] '>
        <Swiper 
          navigation={true}
        >
            {
                shapeData.map((item, index)=>(
                    <SwiperSlide key={index}>
                        <div className='w-full h-fit py-10 bg-blue-950 text-white flex flex-col items-center justify-center gap-5'>
                            {/* explain section  */}
                            <div className='w-[70%] mx-auto text-2xl lg:text-4xl text-center xl:text-6xl leading-10 font-thin line-clamp-2'>{item.how}</div>
                            {/* autor section  */}
                            <div className='text-xl capitalize font-bold'>autor: {item.name}</div>
                            {/* image section  */}
                            <img src={item.img} alt="" className='w-[90px] aspect-square rounded-full object-cover'/>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
    </div>
  )
}

export default ShapeSlide
