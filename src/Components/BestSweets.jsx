import React from 'react'
import { bestProductData } from '../Data/Data' 
import Header from './Header'
import {shopData} from '../Data/ShopData'


const BestSweets = () => {
  const data = shopData.slice(0, 5)

  return (
    <div className='py-10'>
          {/* header sections  */}
          <Header>Our best collections</Header>
        {/* container section  */}
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
          {/* best cake  */}
          <div className='flex flex-col gap-5 items-center justify-center'>
            {bestProductData.map((product, index) => (
              <div key={index} className='flex flex-col items-center justify-center gap-5 bg-slate-100 w-full pb-5 hover:scale-105 transition-all duration-300 hover:shadow-xl'>
                {/* image section  */}
                <div className='w-full h-[300px] overflow-hidden '>
                  <img src={product.img} alt={product.name} className='w-full' />
                </div>
                {/* details section  */}
                <div className='space-y-3'>
                  <h1 className='text-3xl font-bold text-yellow-600'>{product.name}</h1>
                  <p className='text-md w-[50%] line-clamp-2 text-slate-600'>{product.details}</p>
                  <div className='flex items-center'>
                    <p className='text-2xl font-bold'>${product.price}</p>
                    <p className='text-2xl font-bold line-through ml-2'>${product.specialPrice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* best sweets section  */}
          <div className='flex flex-col gap-2 items-start justify-center'>{data.map((item, index)=>(
            <div key={index} className='bg-slate-100 flex gap-2 items-center justify-between w-full h-fit hover:scale-105 transition-all duration-300 hover:shadow-xl'>
              <div className='w-1/3 h-[200px] object-cover overflow-hidden p-2'>
                <img src={item.img} alt="" className='w-full h-[200px] object-cover overflow-hidden'/>
              </div>
              <div className='w-2/3 flex flex-col gap-2 items-start justify-center'>
                <h1 className='text-2xl font-bold text-yellow-600'>{item.title}</h1>
                <p className='text-md w-[80%] line-clamp-2 text-slate-600'>{item.details}</p>
                <div className='flex items-center'>
                  <p className='text-xl font-bold'>${item.price}</p>
                  <p className='text-xl font-bold line-through ml-2'>${item.specialPrice}</p>
                </div>
              </div>
            </div>
          ))}</div>
        </div>
    </div>
  )
}

export default BestSweets
