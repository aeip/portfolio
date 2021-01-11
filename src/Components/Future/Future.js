import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Future = () => {
	return (
		<div className='future'>
			<h2>LinkedIn & Github</h2>
			<div className='external'>
				{/* <div
					class='LI-profile-badge'
					data-version='v1'
					data-size='medium'
					data-locale='en_US'
					data-type='vertical'
					data-theme='dark'
					data-vanity='smecla'>
					<a
						class='LI-simple-link'
						href='https://www.linkedin.com/in/smecla?trk=profile-badge'>
						Stasys Meclazcke
					</a>
				</div> */}
				<div>
					<a
						href='https://www.linkedin.com/in/smecla/'
						target='_blank'
						rel='noreferrer'>
						<FontAwesomeIcon className="linkedin" icon={faLinkedin} size='8x' />
					</a>
				</div>
				<div>
					<a href='https://github.com/aeip/' target='_blank' rel='noreferrer'>
						<FontAwesomeIcon className="github" icon={faGithubSquare} size='8x' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Future;
