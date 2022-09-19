import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import ResponsiveContext from '../Context/ResponsiveContext';
import MenuItem from './MenuItem';
import menuItemData from '../Data/menuItemData';
import Campaign from './Campaign';
// for responsive
import ToggleMenu from './Responsive components/ToggleMenu';
import ToggleMenuItem from './Responsive components/ToggleMenuItem';

function Header() {

    const [flag, setFlag] = useState("");
    const [isFlagLoaded, setIsFlagLoaded] = useState(false)
    const getFlag = async () => {
        try {
            const res = await fetch("https://countryflagsapi.com/png/in");
            setFlag(res.url)
            setIsFlagLoaded(true)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect( () => {
        getFlag();
    }, [])

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
                    {
                        isFlagLoaded && 
                        ( <>
                            <img src={flag} alt='flag' />
                            <p>English</p>
                        </>)
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
                        <p>Log In</p>
                    </div>  
                    </Link>
                    <div className='cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>Cart</p>
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