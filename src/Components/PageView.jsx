import React from 'react'

const PageView = ({light, title}) => {
  return (
    <div className={` ${light ? "text-black bg-blue-300" : " text-white bg-blue-900" } py-3 `}>
        {/* container section  */}
        <div className='w-[80%] mx-auto flex items-center justify-center h-[150px] lg:h-[200px] text-4xl lg:text-6xl font-bold'>
            {title}
        </div>
    </div>
  )
}

export default PageView
