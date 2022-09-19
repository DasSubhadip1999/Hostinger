import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"
import "./services.css";
import ServiceDetailItem from './ServiceDetailItem';
import Button from '../shared/Button';
import serviceDetailData from '../../Data/serviceDetailData';
import planFeatureData from '../../Data/planFeatureData';

function Services() {
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
        <h2>All-In-One Web Hosting</h2>
        <p>We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage.</p>
      </div>

      <div className='hosting-services' id='hosting-services'>
        <h3>Best Web Hosting</h3>
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
                <p>₹</p>
                <h1>149.00</h1>
                <p>/mo</p>
            </div>
            <p>₹249.00/mo when you renew</p>
            <Button appearance="secondaryblue" text="Select" />
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
            {isService ? 'See Less' : "See All Features"}
           </p>
        </div>
      </div>
    </div>
  )
}

export default Services