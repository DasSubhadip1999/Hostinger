import React from 'react'

function Input({type,placeholder,value}) {
  return <input className='login-input' type={type} placeholder={placeholder} value={value} />
}

export default Input