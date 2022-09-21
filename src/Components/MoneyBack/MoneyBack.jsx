import React, { useContext } from 'react'
import TranslationContext from '../../Context/TranslationContext'
import Button from '../shared/Button'
import './moneyback.css'

function MoneyBack() {
  const { t, cBT } = useContext(TranslationContext)
  return (
    <div className='money-back'>
      <h1>{t("30-Day Money-Back Guarantee")}</h1>
      <p style={{fontSize : "15px", fontWeight : 500, color : 'rgba(0,0,0,0.8)'}}>{t("We'll refund your payment if you’re not 100% satisfied with Hostinger. No hassle, no risk.")}</p>
      <Button appearance="secondaryblue" text={cBT} />
    </div>
  )
}

export default MoneyBack