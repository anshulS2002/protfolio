import React, { useState, useEffect } from 'react';
import AnimatedLetters from "../AnimatedLetters/index";
import "./project.scss";
import ProjectItems from "./ProjectItems/ProjectItems"
import projects from "../../assets/data/project";
import InqueImage from "../../assets/img/inque.png";
import MSTImage from '../../assets/img/MST.png';
import CryptoverseImage from '../../assets/img/Cryptoverse.png';
import PortfolioImage from '../../assets/img/portfolio.png';

import Loader from '../Loader/Loader';
const Project = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timeFunc = setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000)

		return () => clearTimeout(timeFunc);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [])

	return (
		loading ? <Loader /> :
			<div className="project-container">
				<div className="project-text-zone">
					<h1 className="project-heading">
						<AnimatedLetters strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
							idx={10}
							letterClass={letterClass}
						/>
					</h1>
				</div>
				<div className="project-items">
					<ProjectItems key={projects[0].id}
						title={projects[0].name}
						desc={projects[0].desc}
						code={projects[0].code}
						link={projects[0].link}
						image={InqueImage}
					/>
					<ProjectItems key={projects[1].id}
						title={projects[1].name}
						desc={projects[1].desc}
						code={projects[1].code}
						link={projects[1].link}
						image={MSTImage}
					/>
					<ProjectItems key={projects[2].id}
						title={projects[2].name}
						desc={projects[2].desc}
						code={projects[2].code}
						link={projects[2].link}
						image={CryptoverseImage}
					/>
					<ProjectItems key={projects[3].id}
						title={projects[3].name}
						desc={projects[3].desc}
						code={projects[3].code}
						link={projects[3].link}
						image={PortfolioImage}
					/>
				</div>
			</div>

	)
}

export default Project
