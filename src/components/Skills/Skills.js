import React, { useEffect, useState } from 'react';
import "./skills.scss";
import AnimatedLetters from "../AnimatedLetters/index";
import SkillsCloud from './SkillsCloud';
import Loader from '../Loader/Loader';

const Skills = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timeFunc = setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 4000)

		return () => clearTimeout(timeFunc);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [])

	return (
		loading ? <Loader /> :
			<>
				<div className="skills-container">
					<div className="skills-text-zone">
						<h1 className="skills-heading">
							<AnimatedLetters strArray={["S", "k", "i", "l", "l", "s",]}
								idx={10}
								letterClass={letterClass}
							/>
						</h1>
						<div className="skills-para">
							<p>
								With expertise in <span style={{ color: '#ffd700' }}>
									ReactJS and the MERN stack (MongoDB, Express.js, React, Node.js),Next.Js
								</span> I specialize in creating dynamic web experiences. I focus on crafting seamless user interfaces that engage users through responsive layouts, smooth animations, and intuitive designs. Let's collaborate on your next project and bring your ideas to life!
							</p>
							<p>
								As a backend developer, I build scalable applications using <span style={{ color: '#ffd700' }}>Node.js and Express.js</span>. With MongoDB as the database, I ensure efficient data management and integration. Additionally, I have experience with Docker for easy deployment and scalability.
							</p>
							<p>
								In problem-solving through <span style={{ color: '#ffd700' }}>Data Structures and Algorithms (DSA) in C++</span>, I have successfully solved over 300 questions.
							</p>
						</div>
					</div>
					<SkillsCloud />
				</div>
			</>
	)
}

export default Skills
