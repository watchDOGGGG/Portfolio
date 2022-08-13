import React from 'react'
import Index from '../Container/index'
import Card from '../Component/card';
import { Myprojects } from '../Dummy/dummy';


export default function Projects() {
  return (
    <Index>
      <div className="center">
        <div className="text-center">
          <div className="">
            <span className="font-extrabold text-4xl db">Projects</span>
            <span className="db lh-copy text-xl">Take a quick view of few of my projects</span>
          </div>
        </div>
        <div className="">
          {
            Myprojects.map((item, i) => (
              <Card item={item} />
            ))
          }
        </div>
      </div>
    </Index>
  )
}
