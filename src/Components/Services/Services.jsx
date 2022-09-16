import React from 'react'
import "./services.css";
import ServiceDetailItem from './ServiceDetailItem';

function Services() {
  return (
    <div className='services-container'>
      <div className='web-ide'>
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
      <div className='hosting-heading'>
        <h2>All-In-One Web Hosting</h2>
        <p>We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage.</p>
      </div>
      <div className='hosting-services'>
        <h1>Best Web Hosting</h1>
        <div className='service-detail'>
          <div className='left'>
              
          </div>
          <div className='middle'>
            
          </div>
          <div className='right'>
              <div>

              </div>
          </div>
        </div>
        <div className='features'>

        </div>
      </div>
    </div>
  )
}

export default Services