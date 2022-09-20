import React, { useContext } from 'react'
import './loginPage.css'
import Input from '../shared/Input'
import {Link} from 'react-router-dom'
import TranslationContext from '../../Context/TranslationContext'

function LoginPage() {
    const { home, loginText, orText, password, forgotpassword } = useContext(TranslationContext);
  return (
    <div className='login-page'>
        <h3 className='tooltip'>
            <span className='tooltiptext'>{home}<span/></span>
            <Link to='/'>
                Hostinger
            </Link>
        </h3>
        <div className='login-container'>
            <div className='login-wrapper'>
                <h4>{loginText}</h4>
                <div className='login-logos'>
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className='hr'>
                    <div/>{orText}<div />
                </div>
                <div className='input-btn-container'>
                    <Input type='email' placeholder='Email' />
                    <Input type='password' placeholder={password} />
                    <Input type='submit' value={loginText} />
                </div>
                <h5>{forgotpassword}?</h5>
            </div>
        </div>
    </div>
  )
}

export default LoginPage