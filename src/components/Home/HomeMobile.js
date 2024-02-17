import React, { useState, useEffect } from 'react'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';
import Home from './Home';

const HomeMobile = () => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(undefined);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 800) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [])

	return (

		!activeMenu ? <>
			<Home />
			<About />
			<Skills />
			<Contact />
			<Project />
		</> : <Home />

	)
}

export default HomeMobile