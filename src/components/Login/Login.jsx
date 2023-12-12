import React from 'react';
import './Login.css';
import Logo from "../../assets/logo-02/LinkAcademy-logos_transparent.png"

function Login() {
    const loginToApp = () => {};
    const register = () => {};
  return (
    <div className='login'>
        <img src={Logo} alt=""/>
        <form>
            <input placeholder='Full name (required if registering)' type="text" />
            <input placeholder='Profile pic url (optional)' type="text" />
            <input placeholder='Email' type="email" />
            <input placeholder='Password' type="password" />
            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>

        <p>
            Not a member?
            <span className='login__register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login
