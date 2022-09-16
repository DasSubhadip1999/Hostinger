import React from 'react';
import OurServicesItem from './OurServicesItem';
import OurServicesData from '../../Data/OurServicesData';
import './ourservices.css';

function OurServices() {
  return (
    <>
        <h1 className='our-services-heading'>Our services include:</h1>
        <div className='our-services-grid'>
            {
                OurServicesData.map( item => <OurServicesItem data={item} />)
            }
        </div>
    </>
  )
}

export default OurServices