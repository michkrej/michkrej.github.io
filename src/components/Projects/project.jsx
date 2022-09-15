import React from 'react';

import './projects.scss';

const Project = ({ info, img }) => {
	const { desc, frameworks, alt, href = '/' } = info;
	return (
		<div className='project'>
			<a href={href} target='_blank' rel='noreferrer'>
				<img src={img} alt={alt} />
			</a>
			<p>
				{desc}
				<br />
				<br />
				<span>
					<b>Developed using:</b> {frameworks}
				</span>
			</p>
		</div>
	);
};

export default Project;
