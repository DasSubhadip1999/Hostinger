import React from 'react'

function VideoCardWrapper({data}) {
  return (
    <div className='videocard-wrapper' id='videocard-wrapper'>
        <div className='video-text' id='video-text'>
            <h6>{data.text.subheading}</h6>
            <h2>{data.text.heading}</h2>
            <p>{data.text.description}</p>
            <small>{data.text.link}</small>
        </div>
        <div className='video' id='video'>
        <video src={data.media.video} autoPlay muted />
        </div>
    </div>
  )
}

export default VideoCardWrapper