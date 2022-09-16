import React from 'react'
import Button from './shared/Button'


function Campaign() {
  return (
    <div className='campaign'>
        <div className='campaign-wrapper'>
            <h2>Savings to Set Your Website in Motion</h2>
            <div className='pricing'>
                <p>₹</p>
                <h1>149.00</h1>
                <p>/mo</p>
            </div>
            <p>Make moves with a free domain and SSL included with a four-year subscription.</p>
            <div className='timer'> 
                <div>00</div>:
                <div>15</div>:
                <div>08</div>:
                <div>45</div>
            </div>
            <Button appearance="primaryred" text="get started" />
            <p>Get exclusive 30-day money-back guarantee</p>
        </div>
    </div>
  )
}

export default Campaign