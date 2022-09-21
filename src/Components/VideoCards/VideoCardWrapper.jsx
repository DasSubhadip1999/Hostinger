import React, { useContext } from 'react'
import TranslationContext from '../../Context/TranslationContext'

function VideoCardWrapper({data}) {
  const { t } = useContext(TranslationContext)
  return (
    <div className='videocard-wrapper' id='videocard-wrapper'>
        <div className='video-text' id='video-text'>
            <h6>{t(data.text.subheading)}</h6>
            <h2>{t(data.text.heading)}</h2>
            <p>{t(data.text.description)}</p>
            <small>{t(data.text.link)}</small>
        </div>
        <div className='video' id='video'>
        <video src={data.media.video} autoPlay muted />
        </div>
    </div>
  )
}

export default VideoCardWrapper