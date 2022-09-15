import React from 'react';

import './projects.scss';

import SOF from '../../images/projects/SOF.svg';
import TCV from '../../images/projects/TCV.svg';
import Bokning from '../../images/projects/Bokningsplanering.jpg';

import { projects } from '../../../constants';
import Project from './project';
import Divider from '../Divider/divider';

const Projects = () => {
	return (
		<div id='projects'>
			<Divider>2022</Divider>
			<div className='project-container'>
				<Project img={Bokning} info={projects.Bokning} />
			</div>
			<Divider>2021</Divider>
			<div className='project-container'>
				<div />
				<Project img={TCV} info={projects.TCV} />
				<Project img={SOF} info={projects.SOF} />
			</div>
		</div>
	);
};

export default Projects;
