import React from 'react'
import resume from '../docs/Resume-Stasys-Meclazcke.pdf'

const About = () => {
    return (
			<div className='about'>
				<div className='about-text'>
					<h1>Full Stack Software Engineer</h1>
					<p>
						I am a full stack developer and designer with determination to build
						complex yet simple products people love and improve their daily
						lives. I love utilizing my intense determination and motivation to
						solve problems because it gives me more knowledge in building
						things. My empathy and understanding of others helps bring my teams
						closer together and accomplish our goal creatively and effectively.
					</p>
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