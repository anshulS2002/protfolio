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
							I am Anshul Somani, a proactive and skilled graduate in Computer Science Engineering. My expertise lies in programming languages and web development technologies, with a strong focus on problem-solving and a passion for data structures and algorithms. I have successfully developed user-friendly websites and applications using React, Node.js, Django, and more. Certified in Microsoft Azure fundamentals and Firebase, I am well-prepared for entry-level roles in cloud computing.
							</p>
							<p>
							My experience as a Liaison Officer highlights my ability to navigate complexities, solve problems, and collaborate effectively. Alongside my academic achievements, including coding contests and sports representation at the district level, I bring a well-rounded skill set and dedication to every endeavor.
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
