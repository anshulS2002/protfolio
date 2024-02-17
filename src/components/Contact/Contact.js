import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.scss";
import AnimatedLetters from "../AnimatedLetters/index";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Sidebar from '../Sidebar/Sidebar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Loader from '../Loader/Loader';
const Contact = () => {
	const [loading, setLoading] = useState(true);
	const form = useRef();
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(undefined);
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
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_kxbvutm', 'template_3v6c7oh', form.current, 'BoMAAYhcE99YMw2PU')
			.then((result) => {
				console.log(result.text);
				e.target.reset();
			}, (error) => {
				alert("Sorry email can not be sent !!😟 Please connect me through other social links 😄");
				console.log(error.text)
			});
	};
	const [letterClass, setLetterClass] = useState('text-animate');
	useEffect(() => {
		const timeFunc = setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 4000)

		return () => clearTimeout(timeFunc)

	}, [])
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		loading ? <Loader /> :
			<div className=" contact-container">
				<div className="contact-page">
					<div className="contact-text-zone">
						<div className="contact-heading">
							{/* <h1> */}
							<AnimatedLetters strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
								idx={15}
								letterClass={letterClass}
							/>
							{/* </h1> */}
						</div>
						<p>
							I am interested in freelance opportunities – especially
							ambitious for large projects and to get placed in company of great intrest. However, if you have other request or
							question, don’t hesitate to contact me using below form
							either.
						</p>
						<form ref={form} onSubmit={sendEmail} className="contact-form">
							<ul>
								<li className="half">
									<input type="text" name="from_name" placeholder="Name" required />
								</li>
								<li className="half">
									<input type="email" name="user_email" placeholder="Email" required />
								</li>
								<li>
									<textarea name="message" id="" placeholder="Message" required>
									</textarea>
								</li>
								<li>
									<input type="submit" className="flat-button" value="SEND" />
								</li>
							</ul>
						</form>
					</div>

					<div className="location-info">
						<div className="contact-info">
							<div className="border-container">
								<div className="half"></div>
								<h3>OR</h3>
								<div className="half"></div>
							</div>
							<div className="contact-links">
								<a target="_blank" rel="noreferrer" href="mailto:anshulsomani735@gmail.com">
									<MailOutlineIcon />
								</a>
								<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/somanianshul02/">
									<LinkedInIcon />
								</a>
								{/* <a target="_blank" rel="noreferrer" href="https://github.com/Ansh7fe">
									<GitHubIcon />
								</a>
								<a target="_blank" rel="noreferrer" href="https://twitter.com/Anshjhanwar07">
									<TwitterIcon />
								</a> */}
							</div>
						</div>
						<div className="info-map">
							Anshul Somani,
							<br />
							Chandidar University, Mohali
							<br />
							Jaipur
							<br />
							<br />
							<span>
								anshulsomani735@gmail.com
							</span>
						</div>
						<div className="map-wrap">
							<div className="leaflet-container">
								<MapContainer center={[30.76899298412525, 76.57535043860612]} zoom={15}>
									<TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
										url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
									<Marker position={[30.76899298412525, 76.57535043860612]}>
										<Popup>
											Anshul lives here let's have a talk.
										</Popup>
									</Marker>
								</MapContainer>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
}

export default Contact
