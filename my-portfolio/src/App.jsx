import React, { Component, useState } from 'react'
import './App.css'
import me from './assets/me.jpg'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Education from './Education'
import Work from './Work'
import Programing from './Programing'
import Project from './Project'

export default function App() {
	const [work, setwork] = useState(false)
	const [programing, setprograming] = useState(false)
	const [project, setproject] = useState(false)
	const [education, seteducation] = useState(false)

	function setAllFalse() {
		seteducation(false)
		setprograming(false)
		setproject(false)
		setwork(false)
	}

	function changeState(function1, state1) {
		setAllFalse()
		function1(state1)
	}

	return (
		<>
			<div className="App">
				<div className="hero-section py-5 px-10">
					<nav className="d-flex flex-row justify-content-between">
						<span className="brand-name ">SM</span>
						<div className="d-flex flex-row">
							<span className="mx-4 nav-items">Home</span>
							<span className="mx-4 nav-items">Contact</span>
							<span className="mx-4 nav-items">About Me</span>
							<span className="mx-4 nav-items">Resume</span>
							<span className="mx-4 nav-items">Testimonial</span>
						</div>
					</nav>
					<div className="hero-section2 justify-content-center row">
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="d-flex justify-content-center flex-column iamtextsection">
								<span className="iamtext">
									Hello, I'm
									<span className="nameiamtext"> SM SHAHARIAR SABBIR </span>
								</span>
								<span className="iamenthusiastics py-2">
									Enthusiastics Dev 😎
								</span>
								<span className="iamtextsubheading">
									knack of building application frontend and backend operations
								</span>
								<div className="d-flex flex-row justify-content-center mt-5">
									<button className="btn-hire-me">Hire Me</button>
									<button className="btn-resume-me">Get Resume</button>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="justify-content-center d-flex Anim">
								<img src={me} alt="" className="img-fluid custom-img" />
							</div>
						</div>
					</div>
					<br />
					<br />
				</div>
				{/* about me section */}

				<div className="about-me-section aboutme-inside my-5">
					<div className="d-flex flex-column">
						<span className="aboutme-text">About Me</span>
						<span className="whyme-text">Why Choose Me</span>
						<div className="row justify-content-center shadow-lg my-5">
							<div className="col-lg-6 col-md-6 d-flex col-sm-12 align-items-center justify-content-center mt-2">
								<DotLottieReact
									src="https://lottie.host/a1acd914-32a5-4511-b142-c1c5065aa16e/dXFijnLTf3.lottie"
									loop
									autoplay
									style={{ width: '700px', height: '300px' }}
								/>
							</div>
							<div className="col-lg-6 col-md-6 d-flex col-sm-12 align-items-center justify-content-center">
								<span className="some-text-about-me p-4 pe-3">
									I enjoy building responsive and user-friendly applications
									while continuously learning new tools and frameworks. I love
									solving problems, exploring innovative ideas, and improving my
									development skills every day.
									<span className="few-highlights"></span>
									<br />
									<span className="few-text"> Few highlights</span>
									<span className="few-list">
										<ul>
											<li>Full-Stack Web Development (MERN)</li>
											<li>Responsive UI/UX Design</li>
											<li>Machine Learning Basics</li>
											<li>Cyber Security Enthusiast</li>
											<li>Docker & AWS Fundamentals</li>
											<li>Problem Solving & DSA</li>
										</ul>
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* resume-section */}
				{/* <div className="resume-outer-section d-flex flex-column">
					<span className="aboutme-text">Resume</span>
					<span className="whyme-text">My Formal Bio Details </span>
					<div
						className="resume-new-section row"
						style={{ width: '70%', marginInline: 'auto' }}
					>
						<div className="col-lg-4 col-md-4 resume-left-section d-flex flex-row">
							<div className="d-flex flex-column bg-new text-dark">
								<span className="icons-span">
									<i className="bi bi-mortarboard-fill"></i>
								</span>
								<span className="icons-span">
									<i className="bi bi-briefcase-fill"></i>
								</span>
								<span className="icons-span">
									<i className="bi bi-code-slash"></i>
								</span>
								<span className="icons-span">
									<i className="bi bi-list-task"></i>
								</span>
								<div className="d-flex flex-column">
									<span className="resume-option-items">work</span>
									<span className="resume-option-items">Educatio</span>
									<span className="resume-option-items">programing</span>
									<span className="resume-option-items">Projects</span>
								</div>
							</div>
						</div>
						<div className="col-lg-8 col-md-8 resume-right-section">
							{education === true && <Education />}
							{programing === true && <Programing />}
							{work === true && <Work />}
							{project === true && <Project />}
						</div>
					</div>
				</div> */}
				<div className="resume-outer-section d-flex flex-column">
					<span className="aboutme-text">Resume</span>
					<span className="whyme-text">My Formal Bio Details</span>

					<div
						className="resume-new-section row"
						style={{ width: '70%', marginInline: 'auto' }}
					>
						<div className="col-lg-4 col-md-4 resume-left-section d-flex flex-row">
							<div className="d-flex flex-column bg-new text-dark">
								{/* ICONS + TEXT FIXED INLINE */}
								<div className="d-flex align-items-center gap-2">
									<i className="bi bi-mortarboard-fill"></i>
									<span
										className="resume-option-items"
										onClick={() => {
											changeState(seteducation, true)
										}}
									>
										Education
									</span>
								</div>

								<div className="d-flex align-items-center gap-2">
									<i className="bi bi-briefcase-fill"></i>
									<span
										className="resume-option-items"
										onClick={() => {
											setwork(true)
										}}
									>
										Work
									</span>
								</div>

								<div className="d-flex align-items-center gap-2">
									<i className="bi bi-code-slash"></i>
									<span
										className="resume-option-items"
										onClick={() => {
											setprograming(true)
										}}
									>
										Programming
									</span>
								</div>

								<div className="d-flex align-items-center gap-2">
									<i className="bi bi-list-task"></i>
									<span
										className="resume-option-items"
										onClick={() => {
											setproject(true)
										}}
									>
										Projects
									</span>
								</div>
							</div>
						</div>
						<div className="col-lg-8 col-md-8 resume-right-section px-0 shadow">
							{education === true && <Education />}
							{programing === true && <Programing />}
							{work === true && <Work />}
							{project === true && <Project />}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
