import React from 'react'
import Stats from './Stats'
const Achievements = () => {
  return (
    <div  className='page-section text-base px-5  ' id="Achievements" >
      <div className="section-title">
          <h2 className="other-header">Achievements</h2>
          </div>
    <div className="flex justify-center">
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <Stats icon1='' title1='New Users' value1='4,200' desc1='Jan 1st - Feb 1st'
               icon2=''  title2='Downloads' value2='31K' desc2='↗︎ 400 (22%)' 
               icon3=''  title3='New Registers' value3='1,200' desc3='↘︎ 90 (14%)' />
        </div>
      </div>
      </div>
  )
}

export default Achievements