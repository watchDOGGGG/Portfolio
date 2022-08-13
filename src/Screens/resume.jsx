import React from 'react'
import Index from '../Container/index'
import { work_experience } from '../Dummy/dummy';
import ExperienceCard from '../Component/experience_card';
import Education from '../Component/education';
import Skills from '../Component/skills';


export default function Resume() {
  return (
    <Index>
      <div className="center">
        <div className="text-center">
          <div className="">
            <span className="font-extrabold text-4xl db">Me!</span>
            <span className="db lh-copy text-xl">Get to know me.</span>
            </div>
        </div>
        <div className="tc">
       
          {
            work_experience.map((item, i) => (
              <ExperienceCard item={item} />
            ))
          }
        </div>
        <Skills/>
        <div>
        <div className="tc">
            <span className="font-extrabold text-xl db">Education!</span>
          </div>
            <Education/>
        </div>
      </div>
    </Index>
  )
}
