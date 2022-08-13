import React from 'react'
import {Link} from 'react-router-dom'
import { stacks } from '../Dummy/dummy'

export default function Skills() {
    return (
        <div className="flex flex-row w-80 center my-4 shadow-2xl p-7">
            <div className="p-2 flex flex-col justify-center w-4/5">
                <span className="font-bold">Technical skills</span>
               <div className="w-full">
               {
                    stacks.map((item, i) =>(
                        <span className="dib text-sm ba b--black-10 br4 w-max p-1">{item.name}</span>
                    ))
                }
               </div>
            </div>
        </div>
    )
}
