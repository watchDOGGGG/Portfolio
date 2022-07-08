import React from 'react'
import { Icon } from '@iconify/react';

export default function Education() {
  return (
    <div className="experience flex flex-column justify-center">
    <div className="f1 tc fw9">
        <span>Education</span>
    </div>

          <div className="center w-70">
              <div className="tc">
                  <h2>
                      <span><Icon icon="charm:graduate-cap" color="#000" width="40" /></span><span className="lh-copy"> University of Calabar - Nigeria</span>
                  </h2>
                  <div className="pa3">
                      <span className="db">Bachelor of Science</span>
                      <span className="db">Mathematics and statistics</span>
                  </div>
              </div>

              <div className="tc">
                  <h2>
                      <span><Icon icon="fa-solid:user-graduate" color="#000" width="40" /></span><span className="lh-copy"> University of Cross River state - Nigeria</span>
                  </h2>
                  <div className="pa3">
                      <span className="db">Bachelor of Science</span>
                      <span className="db">Computer science & software analysis</span>
                  </div>
              </div>
          </div>
      </div>
  )
}
