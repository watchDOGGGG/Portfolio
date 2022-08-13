import React from 'react'
import {Link} from 'react-router-dom'

export default function Card({item}) {
  return (
    <div className="flex flex-row w-full my-24 shadow-2xl">
        <div className="card_content flex flex-col bg-black text-white w-3/5 p-7">
            <div className="flex flex-row justify-between">
                <div className=" h-5 w-5 bg-white flex flex-col justify-center">
                    <span className=""></span>
                </div>
                <div className="font-extrabold text-xl flex flex-col justify-center">
                    <span>{item.name}</span>
                  </div>
                  <Link to={`//${item.link}`}>
                      <button className="button-color border border-blue-900 bg-white text-black">check out</button>
                  </Link>
            </div>

            <div className="my-20">
                <div className="underline">
                    <span>Description</span>
                </div>
                <div className="flex flex-row flex-wrap leading-6">
                    <span>{item.about}</span>
                </div>
            </div>
            <div className="">
                <div className="underline">
                    <span>Stacks</span>
                </div>
                <div className="flex flex-row flex-wrap leading-6">
                    <span>{item.stacks}</span>
                </div>
            </div>
        </div>
        <div className="w-3/5">
            <img src={item.image} className="h-96 object-cover"/>
        </div>
    </div>
  )
}
