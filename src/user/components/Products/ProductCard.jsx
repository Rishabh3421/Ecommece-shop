import React from 'react'
import './ProductCard.css'

const ProductCard = ({products}) => {
  return (
   <div className="productCard border-2 w-[15rem] m-3 transition-all overflow-hidden cursor-pointer">
    <div className="h-[20rem] imageContainer overflow-hidden">
      <img className='h-full w-full object-cover object-left-top' src={products.imageUrl} alt="" />
    </div>
    <div className="ProductDetails  bg-white p-3">
      <p className='font-semibold'>{products.title}</p>
      <p className='text-gray-500'>{products.brand}</p>
      <div className="price flex gap-3">
        <p>₹{products.discountedPrice}</p>
        <p className='line-through text-gray-500'>₹{products.price}</p>
        <p className='text-green-500 font-semibold'>{products.discountPersent}%Off</p>
      </div>
    </div>
   </div>
  )
}

export default ProductCard