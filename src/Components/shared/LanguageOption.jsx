import React, { useContext } from 'react'
import TranslationContext from '../../Context/TranslationContext'

function LanguageOption({imgLink, text, lanCode}) {
    const { setLanguage } = useContext(TranslationContext);
  return (
    <div onClick={() => setLanguage(imgLink, text, lanCode)} className='options'>
        <img src={imgLink} alt="" />
        <p>{text}</p>
    </div>
    )
}

export default LanguageOption