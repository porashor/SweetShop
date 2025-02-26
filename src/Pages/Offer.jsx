import React from 'react'
import PageView from '../Components/PageView'
import ShopDS from "../Components/ShopDS.jsx"




const Offer = ({light}) => {
  return (
    <div>
      <PageView light={light} title={"Special Offer"}/>
      {/* offer page container  */}
      <div className='w-[80%] mx-auto py-10'>
        <ShopDS/>
      </div>
    </div>
  )
}

export default Offer
