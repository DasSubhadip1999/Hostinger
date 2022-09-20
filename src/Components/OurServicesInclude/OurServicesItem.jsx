import React, { useContext } from 'react'
import TranslationContext from '../../Context/TranslationContext'

function OurServicesItem({data}) {
  const { t } = useContext(TranslationContext);
  return (
    <div >
        <img src={data.logo} alt='logo' />
        <p>{`${t(data.title)}`}</p>
    </div>
  )
}

export default OurServicesItem