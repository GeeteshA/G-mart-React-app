import React, { useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo/logo-no-background.png'
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [Menu,setMenu] = useState("home");

    return (
    <section id="header">
        <img src={logo} alt=""/>
        <div>
            <ul id="navbar">
                <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{Menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Shop")}}><Link style={{ textDecoration: 'none' }} to='/Shop'>Shop</Link>{Menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration: 'none' }} to='/watches'>Watches</Link>{Menu==="watches"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("trands")}}><Link style={{ textDecoration: 'none' }} to='/trends'>Trends</Link>{Menu==="trends"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contact")}}><Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>{Menu==="contact"?<hr/>:<></>}</li>

            </ul>

        </div>
        <div id="login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><a href="cart.html"><i><IoCart color="black" size={42}/></i></a></Link>
            </div>
    </section>

    )
}

export default Navbar
