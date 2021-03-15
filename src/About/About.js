import React from 'react';
import photo from './Pkdick.jpeg';

const About = () => {
	return (
		<div>
			<h1>About The Author</h1>
			<img src={photo} alt='photograph of Philip K Dick' height='400px' />
			<h2>Philip Kindred Dick</h2>
			<h3>December 16th 1928 - March 2nd 1982</h3>
			<p>
				Philip K. Dick, born in Chicago, IL, was an American novelist, short
				story writer, and essayist whose published work was almost entirely
				Science Fiction. He explored sociological, political and metaphysical
				themes in his novels, characterized by monopolistic corporations,
				authoritarian governments, and altered states. His later works strongly
				reflected his personal interests in metaphysics and theology. He also
				often drew upon his own life experiences, especially those of drug
				abuse, paranoia, and schizophrenia. Some of his most notable works went
				on to become the inspiration for major films such as Blade Runner and
				minority report.
			</p>
			<a
				href='https://en.wikipedia.org/wiki/Philip_K._Dick'
				target='_blank'
				rel='noreferrer'>
				Source and More Information
			</a>
		</div>
	);
};

export default About;
