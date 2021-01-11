import React from 'react'
import resume from '../docs/Resume-Stasys-Meclazcke.pdf'

const About = () => {
    return (
			<div className='about'>
				<div className='about-text'>
					<h1>Full Stack Software Engineer</h1>
					<i>
						with intense determination and motivation to build complex yet simple
						products people love to use every day.
					</i>
				</div>
				<div className='about-buttons'>
					{/* <div className='about-buttons-left'>
						<a href='https://www.linkedin.com/in/smecla'>
							<img src='../img/linkedin.png' alt='' />
						</a>
						<a href='https://generalassemb.ly/education/software-engineering-immersive/houston'>
							<img src='../img/ga.png' alt='' />
						</a>
					</div> */}
					<div className='about-buttons-middle'>
						<a href={resume}>
							<button className='normalButton'>Resume</button>
						</a>
						<a href='#contact'>
							<button className='contact-button'>Contact Me</button>
						</a>
					</div>
					{/* <div className='about-buttons-right'>
						<a href='https://www.appcoda.com/wwdc-2015-scholarship/'>
							<img src='../img/wwdc.png' alt='' />
						</a>
						<a href='https://github.com/aeip/'>
							<img src='../img/github.png' alt='' />
						</a>
					</div> */}
				</div>
			</div>
		);
}

export default About