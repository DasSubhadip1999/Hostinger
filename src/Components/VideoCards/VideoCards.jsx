import React, { useContext } from 'react'
import { v4 as uuidv4} from "uuid"
import "./videocard.css"
import VideoCardWrapper from './VideoCardWrapper'
import VideoCardData from '../../Data/videoCardData'
import UserTextItem from './UserTextItem'
import userItemData from '../../Data/userItemData'
import TranslationContext from '../../Context/TranslationContext'

function VideoCards() {
  const { t } = useContext(TranslationContext);
  return (
    <>
    <div className='videocard-container' id='videocard-container'>
        {
            VideoCardData.map( item => <VideoCardWrapper key={uuidv4()} data={item} />)
        }
    </div>
    
    <h1>{t("User-Friendly Control Panel")}</h1>
    <div className='user-friendly-wrapper' id='user-friendly-wrapper'>
        <video src='https://assets.hostinger.com/videos/homepage2020/user-friendly-cp-2020-7ab2c70b24.mp4' autoPlay muted />
        <div className='user-text'>
          {
            userItemData.map( item => <UserTextItem key={uuidv4()} data={item} />)
          }
        </div>
    </div>
    </>
  )
}

export default VideoCards