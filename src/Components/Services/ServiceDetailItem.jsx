import React, { useContext } from 'react'
import TranslationContext from '../../Context/TranslationContext'

function ServiceDetailItem({data}) {
  const { t } = useContext(TranslationContext)
  return (
    <div className='service-detail-item'>
        <i className="fa-solid fa-check"></i>
        <p>{`${t(data.bold)}`}</p>
        <p>{`${t(data.normal)}`}</p>
        <i className="fa-regular fa-circle-question"></i>
    </div>
  )
}

export default ServiceDetailItem