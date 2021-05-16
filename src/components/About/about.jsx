import React from "react"

import "./about.scss"

import data from "../../../constants"

const About = () => {
  return (
    <div id='about' className='about-container'>
      <div className='about'>
        <p>{data.about.p1}</p>
        <p>{data.about.p2}</p>
      </div>
    </div>
  )
}

export default About
