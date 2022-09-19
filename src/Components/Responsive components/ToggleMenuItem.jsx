import React from 'react'
import menuItemData from '../../Data/menuItemData'
import ToggleMenuList from './ToggleMenuList'
import { v4 as uuidv4} from "uuid"
import {Link} from 'react-router-dom'

function ToggleMenuItem() {
  return (
    <>
        <div className='toggle-menu-item'>
        {
            menuItemData.map( (item) => {
                return (
                    <ToggleMenuList key={uuidv4()} data={item} />
                )
            })
        }
        </div>
        <div className='toggle-menu-login'>
          <Link to='/login'>
            <div>
              <i className="fa-solid fa-lock"></i>
              <p>Log In</p>
            </div>
          </Link>
        </div>
    </>
  )
}

export default ToggleMenuItem