import React from 'react'
import './Contact.css'
// import Map from './Map'

const Contactus = () => {
  return (
    <div className='container'>
        <div className='banner_2'>
            <div className="txt_1">
            <h2>#Let's_talk</h2>
            <p>Leave a Message <br/>we love to hear from you...</p>
            </div>
        </div>
        <div className="contact-details">
          <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or drop a mail!</h2>
            <h3>Head Office</h3>
            <div>
              <li>
                <i className='fa-solid fa-map'></i>
                <p>123 Indra Street 6-A J.W.</p>
              </li>
              <li>
                <i className='fa-solid fa-envelope'></i>
                <p>contact@gmail.com</p>
              </li>
              <li>
                <i className='fa-solid fa-phone'></i>
                <p>+91 9876543210</p>
              </li>
              <li>
                <i className='fa-solid fa-clock'></i>
                <p>Monday to Saturday: 9.00am to 16.00pm</p>
              </li>
              </div>
            </div>
          <div className="map">
          {/* <Map/> */}
          </div>
        </div>
       <div className="form-details">
          <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder='Your Name'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Subject'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button className='normal'>Submit</button>
          </form>
    </div>
    </div>
  )
}

export default Contactus