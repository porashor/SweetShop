import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { shopData } from '../Data/ShopData';

const ShopDS = () => {
  return (
    <div className=' '>
      <Swiper
      slidesPerView={5}
    >
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </Swiper>
    </div>
  )
}

export default ShopDS
