import React from 'react';
import './ProductCard.css';

const ProductCard = ({product}) => {
  return (
    <div className='productCard'>
      <div className="h-[20rem] overflow-hidden">
        <img className='hover:scale-110 transition-all duration-500' src={product.imageUrl} alt="" />
      </div>

      <div className="productDetails bg-white p-3 border-2 rounded-md">
        <div className="">
          <h2 className='font-semibold'>{product.brand}</h2>
          <p className='opacity-75'>{product.title}</p>
          <div className="flex gap-3">
            <p className='font-semibold'>₹{product.discountedPrice}</p>
            <p className='line-through opacity-60'>₹{product.price}</p>
            <p className='text-green-700 font-semibold'>{product.discountPersent}Off</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
