// import React from 'react'
import arrowup from '../assets/arrow_circle_up.svg'
import locationicon from '../assets/locationicon.svg'
import whatsappicon from '../assets/whatsappicon.svg'
import phoneicon from '../assets/phoneicon.svg'
import mailicon from '../assets/mailicon.svg'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#262262]">
      <div className="cc-container">
      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col max-sm:flex-col justify-center pt-7 mb-4 items-center">
        <h3 className="text-white text-xl">Back to top</h3>
        <img src={arrowup} alt={arrowup}/>
      </div>
        <div className="flex justify-between">
          <div>
           <h3 className="text-white text-xl">Office Address</h3>
           <div>
            <div className="flex gap-x-2.5 my-4 items-center">
              <img src={locationicon} alt={locationicon} className="text-sm h-8"/>
              <p className="text-white text-xl">39 Darlington street, Mokola Ibadan</p>
            </div>
            <div className="flex gap-x-6 items-center">
             <div className="flex gap-x-2.5 items-center">
              <img src={whatsappicon} alt={whatsappicon} className="text-sm h-7"/>
              <p className="text-white text-xl">+2348103307818</p>
             </div> 
              <div className="flex gap-x-2.5 items-center">
                <img src={phoneicon} alt={phoneicon} className="text-sm h-6 text-center"/>
                <p className="text-white text-xl">+2347063021215</p>
              </div>
            </div>
            <div className="flex gap-x-2.5 my-5 items-center">
              <img src={mailicon} alt={mailicon} className="text-sm h-7"/>
              <p className="text-white text-xl">worthyprints23@gmail.com</p>
            </div>
           </div>
          </div>
          <div>
            <p className="text-white text-xl">How to Place order</p>
            <p className="text-white text-xl my-7">Terms and Conditions</p>
          </div>
        </div>
        <div className='text-center pb-3 mt-6'>
          <p className="text-xl text-white">Copyright {year}</p>
        </div>
      </div>
    </div>
  )
}
