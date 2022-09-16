import React from 'react'

function Button({appearance, text}) {
    let newStyle;
    if( appearance === "primaryred") {
        newStyle = {
            backgroundColor : "#fc5185",
            width : '15rem',
            height : '3rem'
        }
    }else if ( appearance === "secondaryblue") {
      newStyle = {
        backgroundColor : "#491bd5",
        width : '16rem',
        height : '2.9rem',
        margin : "1rem auto"
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