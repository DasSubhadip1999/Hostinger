import React, { useState } from 'react'

function MenuItem({data}) {
  return (
    <div  className='menu-item'>
        {data.title}
        <i className="fa-solid fa-angle-down"></i>
        <div className='item-detail'></div>
    </div>
  )
}

export default MenuItem