import React, { useState, useEffect } from 'react';
import Cards from './Cards'

const Work = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		let sheetAsJSON =
			'https://spreadsheets.google.com/feeds/list/1TlKRKovC8em4akrec83UF8KgqFztfjvAfACcb0tpy5E/od6/public/values?alt=json';
		const getProjects = async () => {
			const apiCall = await fetch(sheetAsJSON);
			const projects = await apiCall.json();
			setProjects(projects.feed.entry);
			console.log(projects.feed.entry);
		};
		getProjects();
	}, []);
	return (
		<div>
			<h2>Recent Work</h2>
			<div>
				{projects ? (
					<Cards projects={projects} />
				) : (
					<div>Loading...</div>
				)}
			</div>
		</div>
	);
};

export default Work;
