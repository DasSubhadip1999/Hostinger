import React from 'react'
import './loginPage.css'
import Input from '../shared/Input'
import {Link} from 'react-router-dom'

function LoginPage() {
  return (
    <div className='login-page'>
        <h3>
            <Link to='/'>
                Hostinger
            </Link>
        </h3>
        <div className='login-container'>
            <div className='login-wrapper'>
                <h4>Log In</h4>
                <div className='login-logos'>
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className='hr'>
                    <div/>or<div />
                </div>
                <div className='input-btn-container'>
                    <Input type='email' placeholder='Email' />
                    <Input type='password' placeholder='Password' />
                    <Input type='submit' value='Log In' />
                </div>
                <h5>Forgot password?</h5>
            </div>
        </div>
    </div>
  )
}

export default LoginPage