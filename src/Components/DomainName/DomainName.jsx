import React from 'react'
import Button from '../shared/Button'
import './domainname.css'

function DomainName() {
  return (
    <div className='domain-name'>
        <h1>Find the perfect domain name</h1>
        <p>Enter domain name of your choice and pick any extension name on the next step (choose between .in, .com, .online, .live, .store, .info and many more)</p>
        <div className='input-group'>
            <input type="text" placeholder='Type in that perfect domain name' />
            <Button appearance="inputbtn" text="Search" />
        </div>
    </div>
  )
}

export default DomainName