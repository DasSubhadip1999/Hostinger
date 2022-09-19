import React from 'react';
import {v4 as uuidv4} from "uuid"
import OurServicesItem from './OurServicesItem';
import OurServicesData from '../../Data/OurServicesData';
import './ourservices.css';

function OurServices() {
  return (
    <>
        <h1 className='our-services-heading' id='our-services-heading'>Our services include:</h1>
        <div className='our-services-grid' id='our-services-grid'>
            {
                OurServicesData.map( item => <OurServicesItem key={uuidv4()} data={item} />)
            }
        </div>
    </>
  )
}

export default OurServices