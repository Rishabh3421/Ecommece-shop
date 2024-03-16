import React from 'react'
import HomeCarousel from '../../components/HomeCarolse/HomeCarolse'
import HomeProductsCarolse from '../../components/HomeProductsCarolse/HomeProductsCarolse'
import mens_kurta from '../../components/ProductData/Mens_Kurtas.json'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div>
        <HomeCarousel/>
        <div className='flex flex-col gap-5'>
            <HomeProductsCarolse data={mens_kurta} section={"Men's Kurta"}/>
            <HomeProductsCarolse data={mens_kurta} section={"Men's Shoes"}/>
            <HomeProductsCarolse data={mens_kurta} section={"Men's Shirts"}/>
           
        </div>
        <Footer/>
    </div>
  )
}

export default Home