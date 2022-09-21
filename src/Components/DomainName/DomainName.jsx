import React, { useContext } from 'react'
import TranslationContext from '../../Context/TranslationContext'
import Button from '../shared/Button'
import './domainname.css'

function DomainName() {
  //from Context Provider
  const { findDomainName, domainSubText, domainInputPlaceholder, searchText} = useContext(TranslationContext);
  return (
    <div className='domain-name' id='domain-name'>
        <h1>{findDomainName}</h1>
        <p>{domainSubText}</p>
        <div className='input-group'>
            <input type="text" placeholder={domainInputPlaceholder} />
            <Button appearance="inputbtn" text={searchText} />
        </div>
    </div>
  )
}

export default DomainName