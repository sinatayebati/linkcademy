import React from 'react';
import './Login.css';
import Logo from "../../assets/logo-02/LinkAcademy-logos_transparent.png"

function Login() {
  return (
    <div className='login'>
        <img src={Logo} alt=""/>
        <form>
            <input placeholder='Full name (required if registering)' type="text" />
        </form>
    </div>
  )
}

export default Login
