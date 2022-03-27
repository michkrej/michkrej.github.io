import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { contactInfo } from '../../../constants';

import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';

import './footer.scss';

const Footer = () => {
	return (
		<footer>
			<a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
			<div className='socials'>
				<OutboundLink
					href={contactInfo.github}
					target='__blank'
					rel='noopener noreferrer'
				>
					<img src={github} alt='Github logo' />
				</OutboundLink>
				<OutboundLink
					href={contactInfo.linkedin}
					target='__blank'
					rel='noopener noreferrer'
				>
					<img src={linkedin} alt='LinkedIn logo' />
				</OutboundLink>
			</div>
		</footer>
	);
};

export default Footer;
