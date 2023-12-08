import React from 'react'
import Hero from '../Components/Hero/Hero'
import Featured from '../Components/Featured/Featured'
import Newarrivals from '../Components/Newarrivals/Newarrivals'
import Banner from '../Components/Banner/Banner'
import Bannertwo from '../Components/Bannertwo/Bannertwo'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Featured/>
      <Banner/>
      <Newarrivals/>
      <Bannertwo/>
    </div>
  )
}

export default Home