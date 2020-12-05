import React from 'react'
import Me from '../img/me.jpg'

const Heading = () => {
    return (
			<div className='heading'>
				<div className='leftHeading'>
					<img className="profile-photo profile-photo-polo" src={Me} alt='Portrait' />
					<h1 id='name'>Stasys Meclazcke</h1>
				</div>
				<div className='rightHeading'>
                    <a href="#contact">
					<button className='contact-button'>Contact Me</button>
                    </a>
				</div>
			</div>
		);
}

export default Heading