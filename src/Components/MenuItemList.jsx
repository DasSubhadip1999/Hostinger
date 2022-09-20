import React, {useContext} from 'react'
import TranslationContext from '../Context/TranslationContext'

function MenuItemList({data}) {
  const { t } = useContext(TranslationContext)
  return (
    <div className='item-list'>
        <img src={data.icon} alt='Logo' />
        <div>
            <h5>{`${t(data.dt)}`}</h5>
            <p>{`${t(data.dd)}`}</p>
        </div>
    </div>
  )
}

export default MenuItemList