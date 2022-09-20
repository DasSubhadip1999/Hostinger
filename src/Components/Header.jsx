import React, { useContext, useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import {Link} from 'react-router-dom'
import ResponsiveContext from '../Context/ResponsiveContext';
import TranslationContext from '../Context/TranslationContext';
import MenuItem from './MenuItem';
import menuItemData from '../Data/menuItemData';
import Campaign from './Campaign';
import LanguageOption from './shared/LanguageOption';
// for responsive
import ToggleMenu from './Responsive components/ToggleMenu';
import ToggleMenuItem from './Responsive components/ToggleMenuItem';

function Header() {
    //for translation
    const {t, login, cart, lan, islanClick, showLanOption, i18n, setLan } = useContext(TranslationContext)
    //get language data from LS
    useEffect( () => {
        let languageObject = JSON.parse(localStorage.getItem("languagedetail")) || {
            language: "en", 
            imgUrl : "https://countryflagsapi.com/png/in", languageName : "English"
        }
        i18n.changeLanguage(languageObject.language);
        setLan( {
            img : languageObject.imgUrl,
            text : languageObject.languageName
        })

    },[])
    
    //for responsive
    const {showMenu} = useContext(ResponsiveContext)

    //nav bar background change on scroll
    const [nav, setNav] = useState(false);
    const changeBackround = () => {
        
        if (window.scrollY >= 50) {
            setNav(true)
        }else {
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeBackround);


  return (
    <header id='header' className={showMenu ? "toggleActive" : null}>
        <nav className={(showMenu ? "toggleActive" : null) || (nav ? "active" : null)}>
            <div className='logo-lan-group'>
                <h1>Hostinger</h1>
                <div>
                    <img onClick={showLanOption} src={lan.img} alt=""/>
                    <p>{`${t(lan.text)}`}</p>
                    {
                        islanClick && (
                            <div className='lan-option'>
                                <LanguageOption key={uuidv4()} imgLink="https://countryflagsapi.com/png/fr" text="French" lanCode="fr" />
                                <LanguageOption key={uuidv4()} imgLink="https://countryflagsapi.com/png/in" text="English" lanCode="en" />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='menubar-container'>
                <div className='menubar'>
                    {
                        menuItemData.map( (item) => <MenuItem key={item.id}  data={item}/>) 
                    }
                </div>
                <div className='login-cart-group'>
                    <Link to='/login'>
                    <div className='login'>
                        <i className="fa-solid fa-lock"></i>
                        <p>{login}</p>
                    </div>  
                    </Link>
                    <div className='cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>{cart}</p>
                    </div>

                </div>
            </div>
            {/* for mobile navbar */}
            <ToggleMenu />
        </nav>
        {
            showMenu && (
                <div className='toggle-menu-container'>
                    {/* for mobile menubar starts */}
                    <ToggleMenuItem />
                     {/* for mobile menubar ends */}   
                </div>
            )
        }
       {/*campaign section starts*/} 
        <Campaign />
    </header>
  )
}

export default Header