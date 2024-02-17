import React, { useEffect, useState } from 'react'
import "./about.scss";
import AnimatedLetters from "../AnimatedLetters/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faNodeJs,
	faCss3,
	faDocker,
	faHtml5,
	faJsSquare,
	faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
const About = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeFunc = setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 3000)

		return () => clearTimeout(timeFunc)

	}, []);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [])

	const title = ["A", "b", "o", "u", "t", " ", "M", "e"];
	return (
		loading ? <Loader /> :
			<>
				<div className="about-page">
					<div className="about-text-zone">
						<div className='title'>
							<AnimatedLetters strArray={title}
								idx={15}
								letterClass={letterClass}
							/>
						</div>

						<div className="about-para">
							<p>
								Hi, my name is Ansh Jhanwar and I'm a Final Year B.Tech student at MNIT with a passion for technology and web development. As a web developer, I have experience building websites and applications using various programming languages and frameworks. In addition to my technical skills, I also enjoy writing technical blogs to share my knowledge and insights with others.
							</p>
							<p>
								I am highly curious about new technologies and always eager to explore different tech stacks. Whether it's front-end development, back-end development, or data science, I am always seeking opportunities to learn and grow my skills.
							</p>
							<p>
								My blogs-<a href='https://ansh720.hashnode.dev' className='myblogs_link'>Hashnode Blog</a>
							</p>
						</div>
					</div>

					<div className="stage-cube-cont">
						<div id="stars"></div>
						<div id="stars2"></div>
						<div id="stars3"></div>
						<div className="cubespinner">
							<div className="face1">
								<FontAwesomeIcon icon={faReact} color="#5ED4F4" />
							</div>
							<div className="face2">
								<FontAwesomeIcon icon={faHtml5} color="#F06529" />
							</div>
							<div className="face5">
								<FontAwesomeIcon icon={faCss3} color="#28A4D9" />
							</div>
							<div className="face4">
								<FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
							</div>
							<div className="face6">
								<FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
							</div>
							<div className="face3">
								<FontAwesomeIcon icon={faDocker} color="#28A4D9" />
							</div>
						</div>
					</div>
				</div>
			</>
	)

}

export default About
