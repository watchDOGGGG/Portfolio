import { Icon } from '@iconify/react'
import React from 'react'
import { stacks, tools } from '../Dummy/dummy'

export default function Skills() {
  return (
      <div className='skills flex flex-column w-100 pa3'>
          <div className='w-80 center flex flex-row w-100 justify-around'>

              <div className="stacks">
                  <div className="bg-white br3 pa2 shadow-5">
                  <div className='ttc tc w-100 f3 black'>
                      <span>Stacks!</span>
                  </div>
                        <div className="">
                        {
                            stacks.map((item,i) =>{
                                return(
                                    <div key={i} className="pa3 mt3 dib ba b--black-10 ml2"> 
                                        <span><Icon icon="ic:baseline-forward" color="#1da1f2" width="15" /></span>
                                        <span>{item.name}</span>
                                    </div>
                                )
                            })
                        }
                        </div>
                  </div>
              </div>
          </div>
        </div>
    )
}
