import React from 'react'
import HomePage from '../../components/HomePage/HomePage'
import Footer from '../../components/Footer/Footer'
import Product from '../../components/Products/Product'
import ProductDetails from '../../components/Products/ProductDetails'


const Home = () => {
  return (
    <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        <ProductDetails/>
        <Footer/>
    </div>
  )
}

export default Home 