import React from 'react'

function MenuItemList({data}) {
  return (
    <div className='item-list'>
        <img src={data.icon} alt='Logo' />
        <div>
            <h5>{data.dt}</h5>
            <p>{data.dd}</p>
        </div>
    </div>
  )
}

export default MenuItemList