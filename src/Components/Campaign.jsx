import React, { useEffect, useState} from 'react'
import Button from './shared/Button'




function Campaign() {
    const [timerDays, setTimerDays] = useState("");
    const [timerHours, setTimerHours] = useState("");
    const [timerMinutes, setTimerMinutes] =useState("");
    const [timerSeconds, setTimerSeconds] = useState("");
    let interval;
    const startTimer = () => {
      const targetDate = new Date("sep 22, 2022 24:00:00").getTime();
      interval = setInterval( () => {
        const now = new Date().getTime();
        const diff = targetDate - now;
        let days = Math.floor( diff / (1000 * 60 * 60 * 24) );
        let hours = Math.floor(  (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
        let minutes = Math.floor( (diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor( (diff % (1000 * 60)) / 1000);

        if ( diff < 0) {
          clearInterval(interval.current)
        }else{
          setTimerDays(("0" + days).slice(-2));
          setTimerHours(("0" + hours).slice(-2));
          setTimerMinutes(("0" + minutes).slice(-2));
          setTimerSeconds(("0" + seconds).slice(-2));
        }
      })
    }

    useEffect( () => {
      startTimer()
    })

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
                <div>{timerDays}</div>:
                <div>{timerHours}</div>:
                <div>{timerMinutes}</div>:
                <div>{timerSeconds}</div>
            </div>
            <Button appearance="primaryred" text="get started" />
            <p>Get exclusive 30-day money-back guarantee</p>
        </div>
    </div>
  )
}

export default Campaign