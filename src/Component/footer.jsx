import { Icon } from '@iconify/react'
import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div className="flex flex-col justify-end footer fw9 tc f5 gray lh-copy w-full">
      <div className="text-right w-full">
        <div className="flex flex-row justify-end">
          <div className="ttj">
            <span className="db font-light text-center">Email</span>
            <span className="font-light  text-center text-sm text-center">Odurandyjnr@gmail.com</span>
          </div>
          <div className="ttj mx-4">
            <span className="db font-light text-center">Follow me</span>
            <Link to="//https://github.com/watchDOGGGG" className="font-light  text-center text-sm text-center">
              <Icon icon="ant-design:github-outlined" width={30} color={"#000000"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
