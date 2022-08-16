import React from 'react'
import Index from '../Container/index'
import {Link} from 'react-router-dom'
import { Icon } from '@iconify/react';
import Resume from '../assest/file/7uhg76688h87t6556uib.PDF'


export default function Intro() {
  return (
    <Index>
        <div className="center">
              <div className="flex flex-row justify-around mx-8">
                  <div className="w-1/2 flex flex-col justify-center shadow-2xl bg-black text-white">
                      <div className="profile-img center p-2">
                          <img src={"https://i.im.ge/2022/08/16/O1l2A4.IMG-20210927-183054-955.jpg"} style={{objectFit: 'cover'}}/>
                      </div>
                      <div className="text-center my-12">
                          <span className="text-2xl font-bold capitalize">Prince Emmanuel</span>
                          <div className="my-24"></div>
                          <div className="text-2xl">
                              <span>Software Engineer</span>
                          </div>
                      </div>
                      <div className="bg-white w-full p-4">
                        <div className="flex flex-row justify-end">
                                <Link className="mx-2" to="//https://github.com/watchDOGGGG"><Icon icon="ant-design:github-outlined" width={30} color={"#000000"}/></Link>
                                <Link className="mx-2" to="//https://www.linkedin.com/in/prince-randy-761839170/"><Icon icon="entypo-social:linkedin-with-circle" width={30} color={"#000000"}/></Link>
                                <Link className="mx-2" to="//https://medium.com/@odurandyjnr"><Icon icon="akar-icons:medium-fill" width={30} color={"#000000"}/></Link>
                                <Link className="mx-2" to="//https://www.facebook.com/prince.randy.528"><Icon icon="cib:facebook-f" width={30} color={"#000000"}/></Link>
                        </div>
                      </div>
                  </div>
                  <div className="flex flex-col justify-center w-1/2">
                      <div className="flex flex-row justify-center w-ful mx-12">
                          <div className="flex flex-col w-full">
                              <span className="font-extrabold text-6xl">Hello</span>
                              <div className="my-6 flex flex-row justify-start">
                                <a href={Resume} target="_blank" className=""><button className="button-color border border-blue-900 bg-black text-white">Resume</button></a>
                               <Link to={"/projects"}> <button className="mx-12 button-color border border-black">Projects</button></Link>
                              </div>
                              <div className="text-light">
                                <span className="leading-6">Hello i'm prince emmanuel a software developer with over 7 years of experience working with Python, Node.Js, React etc.</span>
                                <div className="my-5 leading-6">
                                    <span>Building little features to solve complex problems.</span>
                                </div>
                              </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </Index>
  )
}
