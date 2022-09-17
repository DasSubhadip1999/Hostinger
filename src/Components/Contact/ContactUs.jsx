import React from 'react'
import Button from '../shared/Button'
import './contactus.css'

function ContactUs() {
  return (
    <div className='contact'>
        <div className='form-container'>
            <h3>Contact us</h3>
            <form>
            <input type="text" placeholder='Your name' />
            <input type="number" placeholder='Your mobile number' />
            <input type="email" placeholder='Your email' />
            <input type="text" placeholder='Subject' />
            <textarea style={ {height : '6rem'}} type="text" placeholder='Your message' />
            <button>Send</button>
            </form>
        </div>
        <div className='about-hostinger'>
            <div className='about-wrapper'>
                <h3>HOSTINGER</h3>
                <p>We are a web hosting company with a mission to help everyone who goes online succeed.
                We accomplish this by continuously developing server technology, giving expert assistance, and ensuring a flawless online website hosting experience.</p>
                <ul>
                    <li><i className="fa-brands fa-linkedin"></i></li>
                    <li><i className="fa-brands fa-square-facebook"></i></li>
                    <li><i className="fa-brands fa-square-instagram"></i></li>
                    <li><i className="fa-brands fa-square-twitter"></i></li>
                    <li><i className="fa-brands fa-square-youtube"></i></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ContactUs