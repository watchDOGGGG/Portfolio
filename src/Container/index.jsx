import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Component/footer'
import { Icon } from '@iconify/react';

export default function Index({children}) {
  return (
    <div className="flex flex-col">
      <header className="fixed w-full shadow-1 h-24 bg-white">
        <div className="flex flex-row h-full center w-3/5">
          <div className="flex flex-col justify-center w-3/5">
            <div className="flex flex-row justify-start mx-5">
              <span className="font-bold text-2xl text-shadow">Prince Emmanuel</span>&nbsp;<span className="text-xl"> / Full stack developer</span>
            </div>
          </div>
          <div className="flex flex-col justify-center w-2/5">
            <div className="flex flex-row justify-around">
              <Link to={"/"}><Icon icon="cib:about-me" width={30}/></Link>
              <Link to={"/projects"}><Icon icon="bi:window-stack" width={30}/></Link>
              <Link to={"/resume"}><Icon icon="ant-design:file-done-outlined" width={30}/></Link>
              <Link to={"/contact"}><Icon icon="bi:phone" width={30}/></Link>
            </div>
          </div>
        </div>
      </header>

      <div className="center w-3/5 h-full my-20">
        <div className="container my-32">
         {children}
        </div>
      <Footer/>
      </div>
    </div>
  )
}
