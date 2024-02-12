import React from 'react'
const ProfileCards = () => {
  return (
    <div className=''>
    <div className="channel-card-group hidden lg:block">
        <div className="little-channel-card channel-card hidden  ">
            <a href="" className="vid1"><span className="links"></span></a>
        </div>
        <div className="big-channel-card channel-card  ">
            <a href=""><span className="links"></span></a>
        </div>
        <div className="little-channel-card channel-card hidden">
            <a href=""><span className="links"></span></a>
        </div>
        <div className="big-channel-card channel-card ">
            <a href=""><span className="links"></span></a>
        </div>
        <div className="little-channel-card channel-card hidden" >
            <a href=""><span className="links"></span></a>
        </div>
        <div className="big-channel-card channel-card ">
            <a href=""><span className="links"></span></a>
        </div>
        <div className="little-channel-card channel-card hidden">
            <a href=""><span className="links"></span></a>
        </div>
        <div className="big-channel-card channel-card ">
            <a href=""><span className="links"></span></a>
        </div>
    </div>
    <div className="lg:hidden"> {/* This div is hidden on large screens */}
  <div className=" p-4 rounded-md shadow-md w-4/6 overflow-hidden">
    <img src="/Akash-1.png" alt="Image" className="w-full h-auto transform transition-transform duration-300 hover:scale-105 rounded" />
  </div>
</div>

    </div>
  )
}

export default ProfileCards