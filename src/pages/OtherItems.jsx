// import React from 'react'
import {Link} from 'react-router-dom'
import {ChartDB5} from '../Chart.DB'

export default function OtherItems() {
  function insertComma(str) {
    if (str.length <= 3) {
        return str;
    }
    const beforeLastThree = str.slice(0, -3);
    const lastThree = str.slice(-3);
    return beforeLastThree + ',' + lastThree;
}
// const {id} = useParams() 
  return (
      <div className="mt-8 mb-0">
      <div>
        <h1 className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl max-sm:text-xl font-bold text-[#FF8000]">Other items</h1>
        <div className='grid max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6 gap-x-14'>
          {ChartDB5.map((product) => {
            const {id, name, image, sign, price} = product
            return(
              <Link path={`/cart/${id}`} key={id} className='my-4'>
                <div className='bg-[#D4D3D3] aspect-auto'>
                  <img src={image} alt={image} className='h-48 object-cover w-full'/>
                </div>
                <div className="text-center bg-white pt-5 h-52 rounded-b-lg">
                  <p className="text-[#FF8000] text-xl font-normal leading normal">{name}</p>
                  <div className='flex justify-center mt-5'>
                    <img src={sign} alt={sign} className='text-bold text-lg'/>
                    <p className="text-[#FF8000] text-lg">{insertComma(price.toString())}</p>
                  </div>
                  <button className='bg-[#262262] text-white my-5 w-36 rounded-xl py-2 border-none outline-none'>Add to Cart</button>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
