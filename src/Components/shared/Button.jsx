import React from 'react'

function Button({appearance, text}) {
    let newStyle;
    if( appearance === "primaryred") {
        newStyle = {
            backgroundColor : "#fc5185",
            width : '15rem',
            height : '3rem'
        }
    }
  return (
    <button className='btn'
    style={newStyle}
    >
    {text}
    </button>
  )
}

export default Button