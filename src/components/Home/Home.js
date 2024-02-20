import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/index";
import Logo from "./Logo/Logo"
import "./home.scss"
import Sidebar from '../Sidebar/Sidebar';
import Loader from "../Loader/Loader"
import HireBtn from './HireBtn';
const Home = () => {
	const [loading, setLoading] = useState(true);
	const [letterClass, setLetterClass] = useState('text-animate');
	const firstArray = ["n", "s", "h","u","l"];
	const lastNameArray = ["o", "m", "a", "n", "i"]
	const jobArray = ["A", " ", "d", "e", "v","e", "l", "o", "p", "e", "r"];
	// const jobArray = ["L", "O", "V", "E", " ", "U", "♥️"];

	useEffect(() => {
		const timeFunc = setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 4000)

		return () => clearTimeout(timeFunc)

	}, []);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [])

	return (

		loading ? <Loader /> :

			<div className="container">
				<div className="stars" id="stars"></div>
				<div className="stars" id="stars2"></div>
				<div className="stars" id="stars3"></div>
				<div className="home_page">
					<div className="text-zone">
						<h1>
							<div>
								<span className={letterClass}>H</span>
								<span className={`${ letterClass } _12`}>i,</span>
							</div>
							<div className="name-container">
								<span className={`${ letterClass } _13`}>I</span>
								<span className={`${ letterClass } _14`}>'m</span>
								<span className="logoA">A</span>
								<AnimatedLetters letterClass={letterClass}
									strArray={firstArray}
									idx={17}
								/> <span className="logoA">S</span>
								<AnimatedLetters letterClass={letterClass}
									strArray={lastNameArray}
									idx={17}
								/>
							</div>
							<AnimatedLetters letterClass={letterClass}
								strArray={jobArray}
								idx={25} />
						</h1>
						<div className='text-bottomContainer'>
							<h2>Devloper / DSA </h2>
							<Link to="/contact" className="flat-button">CONTACT ME</Link>
						</div>
					</div>
					<div className="home_image">
						<Logo />
						<HireBtn />
					</div>
				</div>
			</div>

	)
}

export default Home
