// import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../assets/worthy lo copy logo.svg'
import '../styles/Navbar.css'
import shopping_cart_icon from '../assets/shopping_cart_icon.svg'
import hamburgericon from '../assets/hamburgericon.svg'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="bg-white shadow-3xl sticky top-0 z-50">
      <nav className="flex justify-between items-center cc-container pt-3 lg:gap-x-10 md:gap-x-6">
        <Link to={"/"} className='flex xl:gap-x-3 md:gap-x-1  items-center'>
          <img src={logo} alt={logo}/>
          <h2 className="font-Inika text-[#262262] xl:text-2xl lg:text-xl md:text-lg sm:text-lg max-sm:text-lg font-bold leading-normal">Worthy Design & Prints</h2>
        </Link>
        <div className='flex xl:gap-x-20 md:gap-x-1 items-center'>
          <p className="font-Inika text-[#FF8000] pointer-events-auto cursor-pointer xl:text-xl lg:text-xl md:text-md sm:text-md leading-normal font-normal hidden md:block" onClick={()=> {navigate("/")}}>Home</p>
          <p className="font-Inika text-[#262262] xl:text-xl lg:text-xl md:text-md sm:text-md font-bold leading-normal pointer-events-auto cursor-pointer hidden md:block" onClick={()=> {navigate("/")}}>Product & Services</p>
          <p className="font-Inika text-[#FF8000] pointer-events-auto cursor-pointer xl:text-xl lg:text-xl md:text-md sm:text-md leading-normal font-normal hidden md:block" onClick={()=> {navigate("/")}}>Contact us</p>
          <p className="font-Inika text-[#FF8000] pointer-events-auto cursor-pointer xl:text-xl lg:text-xl md:text-md sm:text-md leading-normal font-normal hidden md:block" onClick={()=> {navigate("/")}}>My Account</p>
        </div>
        <div className="flex gap-x-14 items-center max-sm:gap-x-10 sm:gap-x-10">
          <div className='block md:hidden'>
          <img src={hamburgericon} alt={hamburgericon} className='max-sm:w-8 max-sm:h-8 sm:w-8 sm:h-8'/>
          </div>
          <div className="rounded-full w-10 h-10 bg-[#262262] flex items-center justify-center max-sm:w-8 max-sm:h-8 sm:w-8 sm:h-8">
          <img src={shopping_cart_icon} alt={shopping_cart_icon} />
          </div>
        </div>
      </nav>
    </div>
  )
}
