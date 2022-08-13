import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Projects from '../Screens/projects'
import Intro from '../Screens/Intro'
import Resume from '../Screens/resume'

export default function Layout() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"*"} element={<Intro/>}/>
            <Route path={"/projects"} element={<Projects/>}/>
            <Route path={"/resume"} element={<Resume/>}/>
        </Routes>
    </BrowserRouter>
  )
}
