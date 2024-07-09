// import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import BusinessCards from './pages/BusinessCards'
import BusinessStationaries from './pages/BusinessStationaries'
import ProductStickers from './pages/ProductStickers'
import ExerciseBooks from './pages/ExerciseBooks'
import OtherItems from './pages/OtherItems'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/cards' element={<BusinessCards/>}/>
          <Route path='/stationeries' element={<BusinessStationaries/>}/>
          <Route path='/stickers' element={<ProductStickers/>}/>
          <Route path='/books' element={<ExerciseBooks/>}/>
          <Route path='/otheritems' element={<OtherItems/>}/>
          <Route path='/cart/:id' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
