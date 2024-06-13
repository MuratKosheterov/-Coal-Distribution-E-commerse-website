import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import ProductDetaills from './pages/ProductDetaills'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'
import Contacts from './pages/Contacts'
import Adress from './pages/Adress'
import AddressDetails from './pages/AddressDetails'
import News from './pages/News'
import Login from './pages/Login'
import Success from './pages/Success'


function App() {
  return (
    <div className=' overflow-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/blog' element={<News />} />
        <Route path='productsDetails/:id' element={<ProductDetaills />} />
        <Route path='products/productsDetails/:id' element={<ProductDetaills />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/address' element={<Adress />} />
        <Route path='address/addressDetails/:id' element={<AddressDetails />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App