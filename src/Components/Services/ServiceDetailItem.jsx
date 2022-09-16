import React from 'react'

function ServiceDetailItem({data}) {
  return (
    <div className='service-detail-item'>
        <i className="fa-solid fa-check"></i>
        <p>{data.bold}</p>
        <p>{data.normal}</p>
        <i className="fa-regular fa-circle-question"></i>
    </div>
  )
}

export default ServiceDetailItem