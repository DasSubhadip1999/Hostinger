import React from 'react'

function OurServicesItem({data}) {
  return (
    <div >
        <img src={data.logo} alt='logo' />
        <p>{data.title}</p>
    </div>
  )
}

export default OurServicesItem