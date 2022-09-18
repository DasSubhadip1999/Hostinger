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
        width : '95%',
        height : '3rem',
        margin : "1rem auto"
      }
    }else if ( appearance === "inputbtn") {
      newStyle = {
        backgroundColor : "#727586",
        margin : 0,
        width : '10rem',
        height : '3.4rem'
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