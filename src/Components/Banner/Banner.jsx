import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
        <section id="banner" class="section-m1">
        <h4>Sale</h4>
        <h2>Up tp <span>30% off</span>- Winter Collections</h2>
        <form action="/Shop" class="inline">
        <button className="normal" >Explore More</button>
        </form>
        {/* <button class="normal">Explore More</button> */}
    </section>
    </div>
  )
}

export default Banner