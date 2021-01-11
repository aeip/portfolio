import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHtml5,
	faCss3,
	faJs,
	faReact,
	faPython,
	faJava,
	faSwift
} from '@fortawesome/free-brands-svg-icons';
import {
	faDatabase,
	faLaptopCode,
	faGem,
	faServer
} from '@fortawesome/free-solid-svg-icons';

const List = () => {
	return (
		<div className='technologies-list'>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faHtml5} size='6x' />
				<h5>HTML5</h5>
				<h5 className='technologies-list-single-time advanced'>Advanced</h5>
				<h5 className='technologies-list-single-time'>5 years</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faCss3} size='6x' />
				<h5>CSS3</h5>
				<h5 className='technologies-list-single-time advanced'>Advanced</h5>
				<h5 className='technologies-list-single-time'>5 years</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faJs} size='6x' />
				<h5>JavaScript</h5>
				<h5 className='technologies-list-single-time advanced'>Advanced</h5>
				<h5 className='technologies-list-single-time'>5 years</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faReact} size='6x' />
				<h5>React</h5>
				<h5 className='technologies-list-single-time advanced'>Advanced</h5>
				<h5 className='technologies-list-single-time'>5 years</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faDatabase} size='6x' />
				<h5>SQL</h5>
				<h5 className='technologies-list-single-time intermediate'>
					Intermediate
				</h5>
				<h5 className='technologies-list-single-time'>3 years</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faPython} size='6x' />
				<h5>Python</h5>
				<h5 className='technologies-list-single-time intermediate'>
					Intermediate
				</h5>
				<h5 className='technologies-list-single-time'>3 years</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faJava} size='6x' />
				<h5>Java</h5>
				<h5 className='technologies-list-single-time intermediate'>
					Intermediate
				</h5>
				<h5 className='technologies-list-single-time'>4 years</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faLaptopCode} size='6x' />
				<h5>TypeScript</h5>
				<h5 className='technologies-list-single-time advanced'>Advanced</h5>
				<h5 className='technologies-list-single-time'>5 years</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faGem} size='6x' />
				<h5>Ruby on Rails</h5>
				<h5 className='technologies-list-single-time advanced'>Advanced</h5>
				<h5 className='technologies-list-single-time'>5 years</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faServer} size='6x' />
				<h5>Express / MongoDB</h5>
				<h5 className='technologies-list-single-time intermediate'>
					Intermediate
				</h5>
				<h5 className='technologies-list-single-time'>3 years</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faSwift} size='6x' />
				<h5>Swift</h5>
				<h5 className='technologies-list-single-time advanced'>Advanced</h5>
				<h5 className='technologies-list-single-time'>5 years</h5>
			</div>
		</div>
	);
};

export default List;
