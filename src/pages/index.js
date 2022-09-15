import * as React from 'react';
import Projects from '../components/Projects/projects';
import About from '../components/About/about';
import Seo from '../components/seo';
import Layout from '../components/Layout/layout';
import Footer from '../components/Footer/footer';
import { indexText } from '../../constants';

import '../styles/index.scss';

const IndexPage = () => {
	return (
		<Layout>
			<Seo />
			<div id='start' className='intro-container'>
				<div className='intro up-and-down'>
					{indexText.map((text) => (
						<p>{text}</p>
					))}
				</div>
			</div>
			<Projects />
			<About />
			<Footer />
		</Layout>
	);
};

export default IndexPage;
