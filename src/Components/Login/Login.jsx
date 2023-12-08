import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className="log-in">
    <div class="container">
        <div class="login-form">
            <div class="form-text">
                <span class="header-text">Login</span>
                <p class="sub-text">Get access to your Orders, Whishlist and Recomendations</p>
            </div>
            <div class="main-form">
                <form method="post">
                    <div class="user-data">
                        <input type="email" name="email" id="email" placeholder=""/>
                        <label for="" class="floating-label">Enter Email/Mobile number</label>
                    </div>
                    <div class="user-data">
                        <input type="password" name="password" id="password" placeholder=""/>
                        <label for="" class="floating-label">Enter Password</label>
                    </div>
                    <div class="tc-text">
                        By continuing, you agree to G-mart's
                        <a href="/">Terms of Use</a> and
                        <a href="/">Privacy Policy</a>.
                    </div>
                    <button type="submit" class="btn_otp">Log in</button>
                </form>
                <div class="create-account">
                    New to G-mart? <a href="#">Create an account</a>
                </div>
            </div>
        </div>
        <div class="btn-close">
            <span class="close-icon">&#x2715;</span>
        </div>
    </div>
    </div>
  )
}

export default Login