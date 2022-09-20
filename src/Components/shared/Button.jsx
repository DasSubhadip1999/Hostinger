import React from 'react'

function Button({appearance, text}) {
    let newStyle;
    if( appearance === "primaryred") {
      newStyle = {
        backgroundColor : "#5F6F94",
        width : '15rem',
        height : '3rem'
      }
    }else if ( appearance === "secondaryblue") {
      newStyle = {
        backgroundColor : "#491bd5",
        width : '15rem',
        height : '3rem',
        margin : "1rem auto"
      }
    }else if ( appearance === "inputbtn") {
      newStyle = {
        backgroundColor : "#727586",
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