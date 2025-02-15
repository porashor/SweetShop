import React from 'react'
import PageView from '../Components/PageView'
import ShopDS from '../Components/ShopDS'



const Blog = ({light}) => {
  return (
    <div>
      <PageView light={light} title={"Welcome to our shop!"}/>
      {/* container section  */}
      <div className='w-[80%] mx-auto py-5'>
        <ShopDS/> 
      </div>
    </div>
  )
}

export default Blog
