import React from 'react'
import './Shop.css'
const Shop = () => {
  return (
    <div className="shop">
    <div className='banner'>
        <div className="text">
        <h2>Dress to impress</h2>
        <p>Dress to impress and make the best of <br />
            yourself every day.</p>
        </div>
    </div>
    <div class = "product-items">
                {/* <!-- single product --> */}
                <div class = "product">
                    <div class = "product-content">
                        <div class = "product-img">
                            <img src = "Images/hoodie/1.png" alt = "product image"/>
                        </div>
                        <div class = "product-btns">
                            <button type = "button" class = "btn-cart"> add to cart
                                <span><i class = "fas fa-plus"></i></span>
                            </button>
                            <button type = "button" class = "btn-buy"> buy now
                                <span><i class = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>

                    <div class = "product-info">
                        <div class = "product-info-top">
                            <h2 class = "sm-title">Allen Solly</h2>
                            <div class = "rating">
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                            </div>
                        </div>
                        <a href = "#" class = "product-name">mens Hoodie DN 21XX, new product</a>
                        <p class = "product-price">₹ 800.00</p>
                        <p class = "product-price">₹ 600.00</p>
                    </div>

                    <div class = "off-info">
                        <h2 class = "sm-title">25% off</h2>
                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* <!-- single product --> */}
                <div class = "product">
                    <div class = "product-content">
                        <div class = "product-img">
                            <img src = "Images/hoodie/2.png" alt = "product image"/>
                        </div>
                        <div class = "product-btns">
                            <button type = "button" class = "btn-cart"> add to cart
                                <span><i class = "fas fa-plus"></i></span>
                            </button>
                            <button type = "button" class = "btn-buy"> buy now
                                <span><i class = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>
                    <div class = "product-info">
                        <div class = "product-info-top">
                            <h2 class = "sm-title">Red Tape</h2>
                            <div class = "rating">
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "far fa-star"></i></span>
                            </div>
                        </div>
                        <a href = "#" class = "product-name">mens Hoodie DN 22XX, new product</a>
                        <p class = "product-price">₹ 180.00</p>
                        <p class = "product-price">₹ 133.00</p>
                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* <!-- single product --> */}
                <div class = "product">
                    <div class = "product-content">
                        <div class = "product-img">
                            <img src = "images/hoodie/3.png" alt = "product image"/>
                        </div>
                        <div class = "product-btns">
                            <button type = "button" class = "btn-cart"> add to cart
                                <span><i class = "fas fa-plus"></i></span>
                            </button>
                            <button type = "button" class = "btn-buy"> buy now
                                <span><i class = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>

                    <div class = "product-info">
                        <div class = "product-info-top">
                            <h2 class = "sm-title">Fort Collins</h2>
                            <div class = "rating">
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "far fa-star"></i></span>
                            </div>
                        </div>
                        <a href = "#" class = "product-name">mens Hoodie DN 23XX, new product</a>
                        <p class = "product-price">₹ 170.00</p>
                        <p class = "product-price">₹ 133.00</p>
                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* <!-- single product --> */}
                <div class = "product">
                    <div class = "product-content">
                        <div class = "product-img">
                            <img src = "images/hoodie/4.png" alt = "product image"/>
                        </div>
                        <div class = "product-btns">
                            <button type = "button" class = "btn-cart"> add to cart
                                <span><i class = "fas fa-plus"></i></span>
                            </button>
                            <button type = "button" class = "btn-buy"> buy now
                                <span><i class = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>

                    <div class = "product-info">
                        <div class = "product-info-top">
                            <h2 class = "sm-title">Red Tape</h2>
                            <div class = "rating">
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "far fa-star"></i></span>
                            </div>
                        </div>
                        <a href = "#" class = "product-name">mens Hoodie DN 24XX, new product</a>
                        <p class = "product-price">₹ 190.00</p>
                        <p class = "product-price">₹ 143.00</p>
                    </div>

                    <div class = "off-info">
                        <h2 class = "sm-title">25% off</h2>
                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* <!-- single product --> */}
                <div class = "product">
                    <div class = "product-content">
                        <div class = "product-img">
                            <img src = "images/hoodie/5.png" alt = "product image"/>
                        </div>
                        <div class = "product-btns">
                            <button type = "button" class = "btn-cart"> add to cart
                                <span><i class = "fas fa-plus"></i></span>
                            </button>
                            <button type = "button" class = "btn-buy"> buy now
                                <span><i class = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>

                    <div class = "product-info">
                        <div class = "product-info-top">
                            <h2 class = "sm-title">Vero Moda</h2>
                            <div class = "rating">
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "far fa-star"></i></span>
                            </div>
                        </div>
                        <a href = "#" class = "product-name">womens Hoodie DN 25XX, new product</a>
                        <p class = "product-price">₹ 250.00</p>
                        <p class = "product-price">₹ 163.00</p>
                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* <!-- single product --> */}
                <div class = "product">
                    <div class = "product-content">
                        <div class = "product-img">
                            <img src = "images/hoodie/6.png" alt = "product image"/>
                        </div>
                        <div class = "product-btns">
                            <button type = "button" class = "btn-cart"> add to cart
                                <span><i class = "fas fa-plus"></i></span>
                            </button>
                            <button type = "button" class = "btn-buy"> buy now
                                <span><i class = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>

                    <div class = "product-info">
                        <div class = "product-info-top">
                            <h2 class = "sm-title">Allen Solly</h2>
                            <div class = "rating">
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                            </div>
                        </div>
                        <a href = "#" class = "product-name">mens Hoodie DN 26XX, new product</a>
                        <p class = "product-price">₹ 350.00</p>
                        <p class = "product-price">₹ 233.00</p>
                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* <!-- single product --> */}
                <div class = "product">
                    <div class = "product-content">
                        <div class = "product-img">
                            <img src = "images/hoodie/7.png" alt = "product image"/>
                        </div>
                        <div class = "product-btns">
                            <button type = "button" class = "btn-cart"> add to cart
                                <span><i class = "fas fa-plus"></i></span>
                            </button>
                            <button type = "button" class = "btn-buy"> buy now
                                <span><i class = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>

                    <div class = "product-info">
                        <div class = "product-info-top">
                            <h2 class = "sm-title">UCB</h2>
                            <div class = "rating">
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "far fa-star"></i></span>
                            </div>
                        </div>
                        <a href = "#" class = "product-name">mens Hoodie DN 27XX, new product</a>
                        <p class = "product-price">₹ 450.00</p>
                        <p class = "product-price">₹ 533.00</p>
                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* <!-- single product --> */}
                <div class = "product">
                    <div class = "product-content">
                        <div class = "product-img">
                            <img src = "images/hoodie/8.png" alt = "product image"/>
                        </div>
                        <div class = "product-btns">
                            <button type = "button" class = "btn-cart"> add to cart
                                <span><i class = "fas fa-plus"></i></span>
                            </button>
                            <button type = "button" class = "btn-buy"> buy now
                                <span><i class = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>

                    <div class = "product-info">
                        <div class = "product-info-top">
                            <h2 class = "sm-title">Forever 21</h2>
                            <div class = "rating">
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "far fa-star"></i></span>
                            </div>
                        </div>
                        <a href = "#" class = "product-name">mens Hoodie DN 28XX, new product</a>
                        <p class = "product-price">₹ 250.00</p>
                        <p class = "product-price">₹ 153.00</p>
                    </div>

                    <div class = "off-info">
                        <h2 class = "sm-title">35% off</h2>
                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* <!-- single product --> */}
                <div class = "product">
                    <div class = "product-content">
                        <div class = "product-img">
                            <img src = "Images/hoodie/9.png" alt = "product image"/>
                        </div>
                        <div class = "product-btns">
                            <button type = "button" class = "btn-cart"> add to cart
                                <span><i class = "fas fa-plus"></i></span>
                            </button>
                            <button type = "button" class = "btn-buy"> buy now
                                <span><i class = "fas fa-shopping-cart"></i></span>
                            </button>
                        </div>
                    </div>

                    <div class = "product-info">
                        <div class = "product-info-top">
                            <h2 class = "sm-title">Adidas</h2>
                            <div class = "rating">
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>

                            </div>
                        </div>
                        <a href = "#" class = "product-name">mens Hoodie DN 29XX, new product</a>
                        <p class = "product-price">₹ 180.00</p>
                        <p class = "product-price">₹ 123.00</p>
                    </div>
                    <div class = "off-info">
                        <h2 class = "sm-title">35% off</h2>
                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* <!-- single product --> */}
                 <div class = "product">
                                    <div class = "product-content">
                                        <div class = "product-img">
                                            <img src = "Images/hoodie/10.png" alt = "product image"/>
                                        </div>
                                        <div class = "product-btns">
                                            <button type = "button" class = "btn-cart"> add to cart
                                                <span><i class = "fas fa-plus"></i></span>
                                            </button>
                                            <button type = "button" class = "btn-buy"> buy now
                                                <span><i class = "fas fa-shopping-cart"></i></span>
                                            </button>
                                        </div>
                                    </div>
                
                                    <div class = "product-info">
                                        <div class = "product-info-top">
                                            <h2 class = "sm-title">Puma</h2>
                                            <div class = "rating">
                                                <span><i class = "fas fa-star"></i></span>
                                                <span><i class = "fas fa-star"></i></span>
                                                <span><i class = "fas fa-star"></i></span>
                                                <span><i class = "fas fa-star"></i></span>
                                                <span><i class = "far fa-star"></i></span>
                                            </div>
                                        </div>
                                        <a href = "#" class = "product-name">mens Hoodie DN 30XX, new product</a>
                                        <p class = "product-price">₹ 178.00</p>
                                        <p class = "product-price">₹ 153.00</p>
                                    </div>
                                    <div class = "off-info">
                                        <h2 class = "sm-title">15% off</h2>
                                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* <!-- single product --> */}
                <div class = "product">
                                    <div class = "product-content">
                                        <div class = "product-img">
                                            <img src = "Images/hoodie/11.png" alt = "product image"/>
                                        </div>
                                        <div class = "product-btns">
                                            <button type = "button" class = "btn-cart"> add to cart
                                                <span><i class = "fas fa-plus"></i></span>
                                            </button>
                                            <button type = "button" class = "btn-buy"> buy now
                                                <span><i class = "fas fa-shopping-cart"></i></span>
                                            </button>
                                        </div>
                                    </div>

                                    <div class = "product-info">
                                        <div class = "product-info-top">
                                            <h2 class = "sm-title">Vero Moda</h2>
                                            <div class = "rating">
                                                <span><i class = "fas fa-star"></i></span>
                                                <span><i class = "fas fa-star"></i></span>
                                                <span><i class = "fas fa-star"></i></span>
                                                <span><i class = "fas fa-star"></i></span>
                                                <span><i class = "far fa-star"></i></span>
                                            </div>
                                        </div>
                                        <a href = "#" class = "product-name">mens Hoodie DN 31XX, new product</a>
                                        <p class = "product-price">₹ 650.00</p>
                                        <p class = "product-price">₹ 433.00</p>
                                    </div>
                                    <div class = "off-info">
                                        <h2 class = "sm-title">35% off</h2>
                                    </div>
                </div>
                {/* <!-- end of single product -->
                 <!-- single product --> */}
                <div class = "product">
                                    <div class = "product-content">
                                        <div class = "product-img">
                                            <img src = "Images/hoodie/12.png" alt = "product image"/>
                                        </div>
                                        <div class = "product-btns">
                                            <button type = "button" class = "btn-cart"> add to cart
                                                <span><i class = "fas fa-plus"></i></span>
                                            </button>
                                            <button type = "button" class = "btn-buy"> buy now
                                                <span><i class = "fas fa-shopping-cart"></i></span>
                                            </button>
                                        </div>
                                    </div>
                
                                    <div class = "product-info">
                                        <div class = "product-info-top">
                                            <h2 class = "sm-title">Allen Solly</h2>
                                            <div class = "rating">
                                                <span><i class = "fas fa-star"></i></span>
                                                <span><i class = "fas fa-star"></i></span>
                                                <span><i class = "fas fa-star"></i></span>
                                                <span><i class = "fas fa-star"></i></span>
                                                <span><i class = "far fa-star"></i></span>
                                            </div>
                                        </div>
                                        <a href = "#" class = "product-name">mens Hoodie DN 32XX, new product</a>
                                        <p class = "product-price">₹ 750.00</p>
                                        <p class = "product-price">₹ 433.00</p>
                                    </div>
                                    <div class = "off-info">
                                        <h2 class = "sm-title">35% off</h2>
                                    {/* <!-- end of single product --> */}
                                    </div>
                </div>

    </div>
    </div>
  )
}

export default Shop