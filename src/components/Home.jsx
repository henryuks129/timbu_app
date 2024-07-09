import {React, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import BussinessStationaries from '../pages/BusinessStationaries'
import BusinessCards from '../pages/BusinessCards'
import ProductStickers from '../pages/ProductStickers'
import ExerciseBooks from '../pages/ExerciseBooks'
import OtherItems from '../pages/OtherItems'
import heroimage from '../assets/heroimage.svg'
// import {ChartDB1, ChartDB2, ChartDB3, ChartDB4, ChartDB5} from '../Chart.DB'

export default function Home() {
  // const {ChartDB1, ChartDB2, ChartDB3, ChartDB4, ChartDB5} = ChartsDB 
  // const [loading, setLoading] = useState(true)
  // const [products, setProducts] = useState(ChartsDB)

  // useEffect(() => {
  //   setTimeout(() => {
  //     const newData = ChartsDB;
  //     setImages();
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div className="bg-[#F3F3F3] h-full">
      <div className="cc-container">
        <section data-testid="hero-section">
          <div className="xl:pt-16 md:pt-16 sm:pt-14 max-sm:pt-10 flex  xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-between items-center">
            <div className="sm:mb-4 max-sm:mb-4">
            <h1 className="text-[#FF8000] xl:text-5xl md:text-custom-size2 sm:text-custom-size3 max-sm:text-custom-size3 font-bold leading-normal w-10/12">Elevate your Space and Business with Artful Elegance from our Product Collection  </h1>
            </div>
            <div className='w-full h-full aspect-auto md:mt-5 sm:mt-3'>
              <img src={heroimage} alt={heroimage} className="max-w-full h-full aspect-auto object-fit"/>
            </div>
          </div>
        </section>
        <section data-testid="products" className="mt-12 max-sm:mt-8 sm:mt-8">
          <div className="flex gap-x-6">
            <h3 className="text-xl text-[#262262]">All</h3>
            <h3 className="text-xl text-[#262262]">Services</h3>
            <h3 className="hero-product-details text-xl text-[#262262] flex pb-2">Products</h3>
          </div>
        </section>
        <section><BussinessStationaries/></section>
        <section><BusinessCards/></section>
        <section><ProductStickers/></section>
        <section><ExerciseBooks/></section>
        <section><OtherItems/></section>
        <div className='mt-5 pb-8'>
          <p className='text-custom-size text-[#FF8000] hidden md:block'>Looking for something else or special customization for any of the products or fill this<span className='text-custom-size text-[#262262]'> form</span></p>
        </div>
        <div className="max-sm:pb-4 sm:pb-4">
          <Link path={"/"} className="flex justify-end">
          <p className="text-[#262262] text-xl block md:hidden">See more</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
