import React from 'react'
import { Icon } from '@iconify/react';
import Resume from '../Assest/file/Prince_Emmanuel_Resume.pdf'

export default function Intro() {
  return (
    <div className="flex flex-column justify-around intro">
      <div className="flex w-80 center">
        <div className="flex flex-column w-70 flex-wrap">
          <span className="ttu f1">HI, Prince Randy here</span>
          <span className="ttu f3 eff1">Full stack Web, Mobile Developer</span>
          <span className="ttl f5 eff w-80">I believe my collaboration,
            critical thinking and problem-solving abilities will support and drive
            your continued organizational success.</span>

          <div className="flex w-100 center pa2 justify-between mt2">
            <span className="blue pointer bb b--blue-10">About</span>
            <span className="red pointer bb b--red-10">Skills</span>
            <span className="yellow pointer bb b--yellow-10">Experience</span>
            <span className="green pointer bb b--green-10">Projects</span>
          </div>

          <div className="center br-pill pa2 tc bg-white black mt5 pointer f3">
            <span>Hire me!</span>
          </div>


          {/* contact infos and resume */}

          <div className="mt4 flex flex-column">
            <span className="fw2 lh-copy"><Icon icon="cib:mail-ru" /> odurandyjnr@gmail.com</span>
            <span className="fw2 lh-copy"><Icon icon="entypo:location-pin" /> Lagos - Nigeria</span>
            <span className="fw2 lh-copy"><Icon icon="carbon:phone-ip" /> Phone - 08073287358</span>
            <span className="fw2 lh-copy blue f3 "><a className="link blue ba b--dashed" href={Resume} target="_blank"><Icon icon="akar-icons:file" /> Download My resume</a></span>
          </div>

        </div>
        {/* side image */}
        <div>
          <img src={""} />
        </div>


      </div>

    </div>
  )
}
 