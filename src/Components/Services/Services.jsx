import React, { useState, useContext } from 'react'
import {v4 as uuidv4} from "uuid"
import "./services.css";
import ServiceDetailItem from './ServiceDetailItem';
import Button from '../shared/Button';
import serviceDetailData from '../../Data/serviceDetailData';
import planFeatureData from '../../Data/planFeatureData';
//translation
import TranslationContext from '../../Context/TranslationContext';

function Services() {
  const { allInOne, allInOneSubText, bWH, moneySign, perMonth, currency, renew, selectText, sAF, seeLess} = useContext(TranslationContext);
  const [isService, setIsService] = useState(false);

  return (
    <div className='services-container'>
      <div className='web-ide' id='web'>
        <div>
          <i className="fa-brands fa-wordpress"></i>
          <p>WordPress</p>
        </div>
        <div>
          <i className="fa-solid fa-server"></i>
          <p>LITESPEED</p>
        </div>
        <div>
          <i className="fa-brands fa-cloudflare"></i>
          <p>cloudflare</p>
        </div>
      </div>
      <div className='hosting-heading' id='hosting-heading'>
        <h2>{allInOne}</h2>
        <p>{allInOneSubText}</p>
      </div>

      <div className='hosting-services' id='hosting-services'>
        <h3>{bWH}</h3>
        <div className='service-detail' id='service-detail'>
          <div className='left'>
              {
                serviceDetailData.left.map( (item) => {
                  return <ServiceDetailItem data={item} key={uuidv4()} />
                })
              }
          </div>
          <div className='middle'>
            <div className='pricing-secondary'>
                <p>{moneySign}</p>
                <h1>{currency}</h1>
                <p>{perMonth}</p>
            </div>
            <p>{renew}</p>
            <Button appearance="secondaryblue" text={selectText} />
          </div>
          <div className='right'>
              {
                serviceDetailData.right.map( (item) => {
                  return <ServiceDetailItem data={item} key={uuidv4()} />
                })
              }
          </div>
        </div>

        {/* display on click starts */}
        <div className={ isService ? 'plan-feature-container show' : 'plan-feature-container'}>
            <h4 className='plan-feature-heading' id='plan-feature-heading'>Plan Features</h4>
            <div className='service-detail' id='service-detail-onclick'>
              <div className='left'>
                  {
                    planFeatureData.left.map( (item) => {
                      return <ServiceDetailItem key={uuidv4()} data={item} />
                    })
                  }
              </div>
              <div className='plan-middle middle'>
                  {
                    planFeatureData.middle.map( (item) => {
                      return <ServiceDetailItem key={uuidv4()} data={item} />
                    })
                  }
              </div>
              <div className='right'>
                  {
                    planFeatureData.right.map( (item) => {
                      return <ServiceDetailItem key={uuidv4()} data={item} />
                    })
                  }
              </div>
            </div>
        </div>
        {/* display on click ends */}
        <div className={isService ? 'features color' : 'features'} id='features'>
           <p 
            onClick={() => {setIsService( prev => !prev)}} >
            {isService ? `${seeLess}` : `${sAF}` }
           </p>
        </div>
      </div>
    </div>
  )
}

export default Services