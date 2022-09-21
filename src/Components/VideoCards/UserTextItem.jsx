import React, { useContext } from 'react'
import TranslationContext from '../../Context/TranslationContext'

function UserTextItem({data}) {
  const { t } = useContext(TranslationContext);
  return (
    <div>
        <img src={t(data.logo)} alt='logo' />
        <h4>{t(data.title)}</h4>
        <p>{t(data.des)}</p>
    </div>
  )
}

export default UserTextItem