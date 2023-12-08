import React from 'react'
import './Bannertwo.css'
const Banner_2 = () => {
  return (
    <div class = "product-collection">
    <div class = "container">
        <div class = "product-collection-wrapper">

            <div class = "product-col-left flex">
                <div class = "product-col-content">
                    <h2 class = "sm-title">New Drop's </h2>
                    <h2 class = "md-title">Exploring the Latest Fashion Trends </h2>
                    <p class = "text-light"> Stay on top of the latest fashion trends for men! From classic style to streetwear, <br /> we've got the latest looks that are sure to turn heads.</p>
                    <button type = "button" class = "btn-dark">Shop now</button>
                </div>
            </div>


            <div class = "product-col-right">
                <div class = "product-col-r-top flex">
                    <div class = "product-col-content">
                        <h2 class = "sm-title">Watches </h2>
                        <h2 class = "md-title">Men's Watches </h2>
                        <p class = "text-light">Explore our exclusive men's watch collection featuring a wide range of stylish and functional watches for men. <br />Find the perfect timepiece for every occasion ...</p>
                        <button type = "button" class = "btn-dark">Shop now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Banner_2