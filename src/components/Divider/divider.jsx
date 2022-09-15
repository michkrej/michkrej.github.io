import React from 'react';

import './divider.scss';

const Divider = ({ children }) => {
	return (
		<div className='container'>
			<div className='border' />
			<span className='content'>{children}</span>
			<div className='border' />
		</div>
	);
};

export default Divider;
