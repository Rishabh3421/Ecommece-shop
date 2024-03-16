import HomeCarousel from '../HomeCarolse/HomeCarolse'
import HomeProductsCarolse from '../HomeProductsCarolse/HomeProductsCarolse'
import mens_kurta from '../ProductData/Mens_Kurtas.json'

const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <div className='flex flex-col gap-5'>
        <HomeProductsCarolse data={mens_kurta} section={"Men's Kurta"} />
        <HomeProductsCarolse data={mens_kurta} section={"Men's Shoes"} />
        <HomeProductsCarolse data={mens_kurta} section={"Men's Shirts"} />

      </div>
    </div>
  )
}

export default HomePage