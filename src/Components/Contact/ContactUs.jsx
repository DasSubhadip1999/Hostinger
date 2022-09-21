import React, { useContext } from 'react'
import TranslationContext from '../../Context/TranslationContext'
import './contactus.css'

function ContactUs() {
    const { t } = useContext(TranslationContext)
  return (
    <div className='contact'>
        <div className='form-container'>
            <h3>{t("Contact us")}</h3>
            <form>
            <input type="text" placeholder={t('Your name')} />
            <input type="number" placeholder={t('Your mobile number')} />
            <input type="email" placeholder={t('Your email')} />
            <input type="text" placeholder={t('Subject')} />
            <textarea style={ {height : '6rem'}} type="text" placeholder={t('Your message')} />
            <button disabled>{t("Send")}</button>
            </form>
        </div>
        <div className='about-hostinger'>
            <div className='about-wrapper'>
                <h3>HOSTINGER</h3>
                <p>{t("We are a web hosting company with a mission to help everyone who goes online succeed. We accomplish this by continuously developing server technology, giving expert assistance, and ensuring a flawless online website hosting experience.")}</p>
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