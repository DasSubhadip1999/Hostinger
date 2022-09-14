import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem';
import menuItemData from '../Data/menuItemData';

function Header() {

    const [flag, setFlag] = useState("");
    const getFlag = async () => {
        try {
            const res = await fetch("https://countryflagsapi.com/png/in");
            setFlag(res.url)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect( () => {
        getFlag();
    }, [])


  return (
    <header>
        <nav>
            <div className='logo-lan-group'>
                <h1>Hostinger</h1>
                <div>
                    <img src={flag} alt='flag' />
                    <p>English</p>
                </div>
            </div>
            <div className='menubar-container'>
                <div className='menubar'>
                    {
                        menuItemData.map( (item) => <MenuItem key={item.id}  data={item}/>) 
                    }
                </div>
                <div className='login-cart-group'>
                    <div className='login'>
                        <i className="fa-solid fa-lock"></i>
                        <p>Log In</p>
                    </div>
                    <div className='cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>Cart</p>
                    </div>

                </div>

            </div>
        </nav>
    </header>
  )
}

export default Header