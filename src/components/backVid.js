import React from "react";
import './backVid.css'
import Bgvideo from '../components/media/bg.mp4'

const Backvid = () => {
    return (
<div className="backvid">
    
    <video src={Bgvideo} autoPlay muted loop class="video-bg"/>
    <div className="bg-overlay"/>    
</div>
    )
}

export default Backvid;