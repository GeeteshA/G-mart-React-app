import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div id='hero'>
        <h4>Summer sale</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Get upto 50% on every products</p>
        <form action="/trends" class="inline">
        <button className="float-left submit-button" >Shop Now</button>
        </form>
        {/* <button>Shop Now</button> */}
        </div>
  ) 
}

export default Hero