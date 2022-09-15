import React, { useContext } from 'react'
import ResponsiveContext from '../../Context/ResponsiveContext'

function ToggleMenu() {
  const {showMenuFn, showMenu} = useContext(ResponsiveContext);
  return (
    <div className='toggle-menu'>
        <i className="fa-solid fa-cart-shopping"></i>
        <i 
          onClick={showMenuFn}  
          className={`fa-solid ${showMenu ? 'fa-xmark' : 'fa-bars'}`}
        >
        </i>
    </div>
  )
}

export default ToggleMenu