import React from 'react';
import './ProductCard.css';

const ProductCard = ({product}) => {
  return (
    <div className="productCard border-2 p-3 w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img className="h-full w-full object-cover object-top" src={product.imageUrl} alt="" />
      </div>
      <div className="textDetails bg-white p-3">
        <div className="">
        <h2 className='font-semibold'>{product.title}</h2>
        <h3 className='font-md opacity-80'>{product.brand}.</h3>
        </div>
        <div className="flex gap-3 mt-1">
          <p className='font-semibold'>₹{product.discountedPrice}</p>
          <p className='line-through opacity-70'>₹{product.price}</p>
          <p className='text-green-700 font-semibold'>{product.discountPersent}%Off</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard