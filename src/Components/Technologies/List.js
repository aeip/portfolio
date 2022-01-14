import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHtml5,
	faCss3,
	faJs,
	faReact,
	faNode,
	faSwift
} from '@fortawesome/free-brands-svg-icons';
import {
	faServer,
	faDigitalTachograph
} from '@fortawesome/free-solid-svg-icons';

const List = () => {
	return (
		<div className='technologies-list'>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faSwift} size='6x' />
				<h5>Swift</h5>
				<h5 className='technologies-list-single-time intermediate'>Mid</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faHtml5} size='6x' />
				<h5>HTML5</h5>
				<h5 className='technologies-list-single-time intermediate'>Mid</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faCss3} size='6x' />
				<h5>CSS3</h5>
				<h5 className='technologies-list-single-time intermediate'>Mid</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faJs} size='6x' />
				<h5>JavaScript</h5>
				<h5 className='technologies-list-single-time intermediate'>Mid</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faReact} size='6x' />
				<h5>React.js</h5>
				<h5 className='technologies-list-single-time intermediate'>Mid</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faDigitalTachograph} size='6x' />
				<h5>REST APIs</h5>
				<h5 className='technologies-list-single-time intermediate'>Mid</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faNode} size='6x' />
				<h5>Node.js</h5>
				<h5 className='technologies-list-single-time entry'>Entry</h5>
			</div>
			<div className='technologies-list-single'>
				<FontAwesomeIcon icon={faServer} size='6x' />
				<h5>Express / MongoDB</h5>
				<h5 className='technologies-list-single-time entry'>Entry</h5>
			</div>
		</div>
	);
};

export default List;
