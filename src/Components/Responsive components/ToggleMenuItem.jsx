import React from 'react'
import menuItemData from '../../Data/menuItemData'
import ToggleMenuList from './ToggleMenuList'
import { v4 as uuidv4} from "uuid"

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
          <div>
            <i className="fa-solid fa-lock"></i>
            <p>Log In</p>
          </div>
        </div>
    </>
  )
}

export default ToggleMenuItem