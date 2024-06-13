import React from 'react'
import Banner from '../components/Banner'
import Products from './Products'
import Statistic from '../components/Statistic'
import Team from '../components/Team'
import Partners from '../components/Partners'

function Home() {
  return (
    <div className=' py-44 ' >
        <Banner/>
        <Products/>
        <Statistic/>
        <Team/>
        <Partners/>
    </div>
  )
}

export default Home