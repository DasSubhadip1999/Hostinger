import React from 'react'

function UserTextItem({data}) {
  return (
    <div>
        <img src={data.logo} alt='logo' />
        <h4>{data.title}</h4>
        <p>{data.des}</p>
    </div>
  )
}

export default UserTextItem