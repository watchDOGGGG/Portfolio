import React from 'react'
import Footer from '../Component/footer'
import About from './about'
import Education from './education'
import Experience from './experience'
import Intro from './intro'
import Projects from './project'
import Skills from './skills'


export default function Layout() {
  return (
    <div className="App">
        <div id="section1">
            <Intro/>
        </div>
        <div id="section2">
          <About/>
        </div>
        <div id="section3">
          <Skills/>
        </div>
        <div id="section4 space_top" className="mt6">
          <Experience/>
        </div>
        <div id="section5 space_top"  className="mt6">
          <Projects/>
        </div>
        <div id="section5 space_top"  className="mt6">
          <Education/>
        </div>
        <div id="section6"  className="mt6">
          <Footer/>
        </div>
    </div>
  )
}
