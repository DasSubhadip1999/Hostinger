import React from 'react'
import Button from '../shared/Button'
import './moneyback.css'

function MoneyBack() {
  return (
    <div className='money-back'>
      <h1>30-Day Money-Back Guarantee</h1>
      <p style={{fontSize : "15px", fontWeight : 500, color : 'rgba(0,0,0,0.8)'}}>We'll refund your payment if you’re not 100% satisfied with Hostinger. No hassle, no risk.</p>
      <Button appearance="secondaryblue" text="Get Started" />
    </div>
  )
}

export default MoneyBack