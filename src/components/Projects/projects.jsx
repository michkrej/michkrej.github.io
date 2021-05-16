import React from "react"

import "./projects.scss"

import SOF from "../../images/projects/SOF.svg"
import TCV from "../../images/projects/TCV.svg"

import data from "../../../constants"

const Projects = () => {
  return (
    <div className='project-container' id='projects'>
      <div className='title'>
        <h1>Projects</h1>
      </div>
      <div className='project'>
        <img src={TCV} alt='Website Test Coverage Visualizer' />
        <p>
          {data.projects.TCV.desc}
          <br />
          <br />
          <span>
            <b>Developed using:</b> {data.projects.TCV.frameworks}
          </span>
        </p>
      </div>
      <div className='project'>
        <img src={SOF} alt='Website Studentorkesterfestivalen' />
        <p>
          {data.projects.SOF.desc}
          <br />
          <br />
          <span>
            <b>Developed using:</b> {data.projects.SOF.frameworks}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Projects
