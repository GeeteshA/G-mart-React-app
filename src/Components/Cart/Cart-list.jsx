import React from 'react'
import './Cart.css'
const Cart = () => {
  return (
        <div className='header-2'>
        <div className='banner_2'>
            <div className="txt_1">
            <h2>#Let's_talk</h2>
            <p>Leave a Message <br/>we love to hear from you...</p>
            </div>
        </div>
        <div className="table">
        <div className="cart">
          <table width='100%'>
                <thead>
                  <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Products</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#"><i className='fas fa-times-circle'></i></a></td>
                    <td><img src="Images/hoodie/1.png" alt="" /></td>
                    <td>Allen Solly Hoodie</td>
                    <td>₹ 600.00</td>
                    <td><input type="number" value='1'/></td>
                    <td>₹ 600.00</td>
                  </tr>
                  <tr>
                    <td><a href="#"><i className='fas fa-times-circle'></i></a></td>
                    <td><img src="Images/jacket/1.png" alt="" /></td>
                    <td>Michael Kors Jacket</td>
                    <td>₹ 800.00</td>
                    <td><input type="number" value='1'/></td>
                    <td>₹ 800.00</td>
                  </tr>
                  <tr>
                    <td><a href="#"><i className='fas fa-times-circle'></i></a></td>
                    <td><img src="images/t-shirts/b3.png" alt="" /></td>
                    <td>ALTLIFE Jeans</td>
                    <td>₹ 833.00</td>
                    <td><input type="number" value='1'/></td>
                    <td>₹ 833.00</td>
                  </tr>
                  <tr>
                    <td><a href="#"><i className='fas fa-times-circle'></i></a></td>
                    <td><img src="images/t-shirts/1.png" alt="" /></td>
                    <td>Allen Solly T-shirt</td>
                    <td>₹ 600.00</td>
                    <td><input type="number" value='1'/></td>
                    <td>₹ 600.00</td>
                  </tr>
                  <tr>
                    <td><a href="#"><i className='fas fa-times-circle'></i></a></td>
                    <td><img src="images/shorts/1.jpg" alt="" /></td>
                    <td>Jockey Shorts</td>
                    <td>₹ 800.00</td>
                    <td><input type="number" value='1'/></td>
                    <td>₹ 800.00</td>
                  </tr>
                </tbody>
          </table>
        
        </div>
            <div className="cart-add">
            <div className="coupan">
              <h3>Apply Coupan</h3>
              <div>
                <input type="text" placeholder="Enter Your Name"/>
                <button>Apply</button>
              </div>
            </div>
            <div className="subtotal">
              <h3>Cart Total</h3>
              <table>
                <tr>
                  <td>Cart Subtotal</td>
                  <td>₹ 3,633.00</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>₹ 3,633.00</strong></td>
                </tr>
              </table>
              <button>Proceed to checkout</button>
            </div>
          </div>
          </div>
          </div>
  )
}

export default Cart