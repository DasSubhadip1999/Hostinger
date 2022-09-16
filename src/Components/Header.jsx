import React, { useContext, useEffect, useState } from 'react'
import ResponsiveContext from '../Context/ResponsiveContext';
import MenuItem from './MenuItem';
import menuItemData from '../Data/menuItemData';
import Campaign from './Campaign';
// for responsive
import ToggleMenu from './Responsive components/ToggleMenu';
import ToggleMenuItem from './Responsive components/ToggleMenuItem';

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

    //for responsive
    const {showMenu} = useContext(ResponsiveContext)


  return (
    <header className={showMenu ? "toggleActive" : null}>
        <nav className={showMenu ? "toggleActive" : null}>
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
            {/* for mobile navbar */}
            <ToggleMenu />
        </nav>
        {/* for mobile menubar starts */}
        {
            showMenu && <ToggleMenuItem />
        }
        {/* for mobile menubar ends */}

        {/*campaign section starts*/}
        <Campaign />

    </header>
  )
}

export default Header