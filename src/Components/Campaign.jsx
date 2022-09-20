import React, { useEffect, useState, useContext} from 'react'
import Button from './shared/Button'
import TranslationContext from '../Context/TranslationContext';




function Campaign() {
    //for translation
    const {cMH, cSH, cBT, cST, day, hour, minute, second, moneySign, perMonth, currency} = useContext(TranslationContext);




    const [timerDays, setTimerDays] = useState("");
    const [timerHours, setTimerHours] = useState("");
    const [timerMinutes, setTimerMinutes] =useState("");
    const [timerSeconds, setTimerSeconds] = useState("");
    let interval;
    const startTimer = () => {
      const targetDate = new Date("oct 2, 2022 24:00:00").getTime();
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
            <h2>{cMH}</h2>
            <div className='pricing'>
                <p>{moneySign}</p>
                <h1>{currency}</h1>
                <p>{perMonth}</p>
            </div>
            <p>{cSH}</p>
            <div className='timer'> 
                <div>{timerDays} <span>{day}</span></div>:
                <div>{timerHours} <span>{hour}</span></div>:
                <div>{timerMinutes} <span>{minute}</span></div>:
                <div>{timerSeconds} <span>{second}</span></div>
            </div>
            <Button appearance="primaryred" text={cBT} />
            <p>{cST}</p>
        </div>
    </div>
  )
}

export default Campaign