import React from 'react';

import './about.scss';

import { about } from '../../../constants';

const About = () => {
	return (
		<div id='about' className='about-container'>
			<div className='about'>
				{about.map((text) => (
					<p>{text}</p>
				))}
			</div>
		</div>
	);
};

export default About;
