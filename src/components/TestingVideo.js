import React from 'react'
import RRRvideo from '../Images/RRR.mp4'
const TestingVideo = () => {
  return (
    <div>
             <div className="ratio ratio-21x9">
  <iframe
    src={RRRvideo}
    title="YouTube video"
    allowFullScreen
    style={{ borderRadius: "10px" }}
  ></iframe>
</div>
    </div>
  )
}

export default TestingVideo
