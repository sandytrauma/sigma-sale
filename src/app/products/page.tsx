import ProductsPage from '@/components/ProductsPage'


import React from 'react'
const page = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      {/* Left */}
    <div className="w-[20%] h-full ">
    <div>
      
    </div>
    </div>

    {/* Right */}
    <div className="w-[80%] h-full">
    <ProductsPage />
    </div>
    
  </div>
  )
}

export default page
