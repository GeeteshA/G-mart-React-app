import React from 'react'
import './Featured.css'
    
const Featured = () => {
  return (
      <div className='featured'>
    <div className = "container">
      <h1 className = "lg-title">Featured Products</h1>
      <h4>Winter Collection New Designs</h4>
      </div>
        <div className = "product-items">
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
                        <p class = "product-price">₹ 1170.00</p>
                        <p class = "product-price">₹ 1033.00</p>
                    </div>
                    <div class = "off-info">
                        <h2 class = "sm-title">21% off</h2>
                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* <!-- single product --> */}
                <div class = "product">
                    <div class = "product-content">
                        <div class = "product-img">
                            <img src = "Images/jacket/1.png" alt = "product image"/>
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
                            <h2 class = "sm-title">Michael Kors</h2>
                            <div class = "rating">
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                            </div>
                        </div>
                        <a href = "#" class = "product-name">mens Jacket DN 51XX, new product</a>
                        <p class = "product-price">₹ 1000.00</p>
                        <p class = "product-price">₹ 800.00</p>
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
                            <img src = "Images/jacket/2.png" alt = "product image"/>
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
                            <h2 class = "sm-title">Michael Kors</h2>
                            <div class = "rating">
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "fas fa-star"></i></span>
                                <span><i class = "far fa-star"></i></span>
                            </div>
                        </div>
                        <a href = "#" class = "product-name">mens Jacket DN 52XX, new product</a>
                        <p class = "product-price">₹ 680.00</p>
                        <p class = "product-price">₹ 533.00</p>
                    </div>
                    <div class = "off-info">
                        <h2 class = "sm-title">14% off</h2>
                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* <!-- single product --> */}
                <div class = "product">
                    <div class = "product-content">
                        <div class = "product-img">
                            <img src = "images/jacket/3.png" alt = "product image"/>
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
                        <a href = "#" class = "product-name">mens Jacket DN 53XX, new product</a>
                        <p class = "product-price">₹ 770.00</p>
                        <p class = "product-price">₹ 633.00</p>
                    </div>
                </div>
                {/* <!-- end of single product --> */}
                {/* Product Start-------------------------- */}
                 <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img src = "images/t-shirts/b3.png" alt = "product image"/>
                            </div>
                            <div className = "product-btns">
                                <button type = "button" className = "btn-cart"> add to cart
                                    <span><i className = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" className = "btn-buy"> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "sm-title">ALTLIFE</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product-name">mens Jeans DN 13XX, new product</a>
                            <p className = "product-price">₹ 1050.00</p>
                            <p className = "product-price">₹ 833.00</p>
                        </div>

                        <div className = "off-info">
                            <h2 className = "sm-title">17% off</h2>
                        </div>
                </div>
                 {/* Product Start-------------------------- */}
                 <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img src = "images/t-shirts/b2.png" alt = "product image"/>
                            </div>
                            <div className = "product-btns">
                                <button type = "button" className = "btn-cart"> add to cart
                                    <span><i className = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" className = "btn-buy"> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "sm-title">ALTLIFE</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product-name">mens Jeans DN 13XX, new product</a>
                            <p className = "product-price">₹ 1150.00</p>
                            <p className = "product-price">₹ 812.00</p>
                        </div>

                        <div className = "off-info">
                            <h2 className = "sm-title">22% off</h2>
                        </div>
                </div>
                {/* Product Start-------------------------- */}
                 <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img src = "images/t-shirts/b4.png" alt = "product image"/>
                            </div>
                            <div className = "product-btns">
                                <button type = "button" className = "btn-cart"> add to cart
                                    <span><i className = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" className = "btn-buy"> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "sm-title">ALTLIFE</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product-name">mens Jeans DN 15XX, new product</a>
                            <p className = "product-price">₹ 1500.00</p>
                            <p className = "product-price">₹ 1330.00</p>
                        </div>

                        <div className = "off-info">
                            <h2 className = "sm-title">20% off</h2>
                        </div>
                 </div>
      </div>
      </div>

  )
}

export default Featured