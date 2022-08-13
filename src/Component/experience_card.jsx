import React from 'react'
import {Link} from 'react-router-dom'

export default function ExperienceCard({item}) {
    return (
        <div className="flex flex-row w-80 center my-24 shadow-2xl">
            <div className="p-2 flex flex-col justify-center w-3/5">
                <div className="font-extrabold text-center">
                    <span>{item.company}</span>
                </div>
                <div className="tc">
                    <span>{item.type}</span>
                </div>
                <div className="tc">
                    <span>{item.location}</span>
                </div>
                <div className="tc">
                    <span>{item.date}</span>
                </div>
            </div>
            <div className="card_content flex flex-col p-2 w-4/5">
                <div className="my-20">
                    <div className="underline">
                        <span>Description</span>
                    </div>
                    <div className="flex flex-row flex-wrap leading-6">
                       {
                        item.duty.map((item,i) =>(
                            <li key={i} className="my-2 text-sm tl">
                                {item}
                            </li>
                        ))
                       }
                    </div>
                </div>
            </div>
        </div>
    )
}
