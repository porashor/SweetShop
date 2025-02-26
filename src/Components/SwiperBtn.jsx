import React from "react"
import { useSwiper } from "swiper/react"
import { FcNext, FcPrevious } from 'react-icons/fc';


const SwiperBtn = ()=>{
const swiper = useSwiper()
return(
    <div className='flex items-center justify-center gap-5 text-2xl'>
        <button onClick={()=>swiper.slidePrev()} className='bg-slate-200 p-2 rounded-full'>
            <FcPrevious/>
        </button>
        <button onClick={()=>swiper.slideNext()} className='bg-slate-200 p-2 rounded-full' >
            <FcNext/>
        </button>
    </div>
)
}

export default SwiperBtn