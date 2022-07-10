import React from 'react'
import { about_me, qoute } from '../Dummy/dummy'
import AboutImg from '../Assest/Image/About.jpg'
import { Icon } from '@iconify/react';

export default function About() {
  return (
    <div className="about flex flex-column w-100 justify-center">
      <div className="flex flex-row w-80 center justify-between content">
        <div className="about_content w-50 flex-wrap">
          <div>
            <span className="lh-copy">{about_me}</span>
          </div>
          {/* links */}
          <div className="mt4 flex flex-row justify-around">
            <span className="pointer"><a href="https://github.com/watchDOGGGG"><Icon icon="akar-icons:github-fill" width="40" color='#000'/></a></span>
            <span className="pointer"><a href="https://www.linkedin.com/in/prince-randy-761839170/"><Icon icon="et:linkedin" width="40" color="#0072b1"/></a></span>
            <span className="pointer"><a href="https://www.facebook.com/prince.randy.528/"><Icon icon="et:facebook" width="40" color="#4267B2" /></a></span>
            <span className="pointer"><Icon icon="et:twitter" width="40" color="#1DA1F2"/></span>
          </div>

          <div className="expl_me  black pa3 mt3">
            <span>{qoute}</span>
          </div>
        </div>

        <div className="w-40 about_me_right">
          <img className="br3 shadow-1 w-100" src={AboutImg}/>
        </div>
      </div>
    </div>
  )
}
