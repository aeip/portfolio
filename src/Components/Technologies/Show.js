import React from 'react';

const Show = () => {
	return (
		<div className='technologies-show'>
			<div class='skills-container' id='skills'>
				<div class='skills-header'>
					<div class='skills-buttons'>
						<span class='dot dot-red'></span>
						<span class='dot dot-yellow'></span>
						<span class='dot dot-green'></span>
					</div>
					<div class='skills-title'>
						<p>
							<svg
								width='1em'
								height='1em'
								viewBox='0 0 16 16'
								class='bi bi-folder-fill'
								fill='#64B4D8'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fill-rule='evenodd'
									d='M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z'
								/>
							</svg>{' '}
							skills.js
						</p>
					</div>
				</div>
				<div class='skills-main'>
					<div class='skills-tohide'>
						<p>marcupio@The-Pro % cd YourCompany/</p>
						<p>
							marcupio@The-Pro % git clone
							https://git.generalassemb.ly/stasysmeclazcke/skills.git
						</p>
						<p>marcupio@The-Pro % Cloning into 'Your Company'...</p>
						<p>
							remote: <b>Problem Solving</b>: 92% (92/100), done.
						</p>
						<p>
							remote: <b>HTML5</b>: 95% (90/100), done.
						</p>
						<p>
							remote: <b>CSS3</b>: 90% (85/100), done.
						</p>
						<p>
							remote: <b>JavaScript</b>: 85% (85/100), done.
						</p>
						<p>
							remote: <b>React</b>: 75% (75/100), done.
						</p>
						<p>
							remote: <b>JQuery</b>: 50% (35/100), done.
						</p>
						<p>
							remote: <b>Ruby on Rails</b>: 60% (60/100), done.
						</p>
						<p>
							remote: <b>Objective-C</b>: 70% (70/100), done.
						</p>
						<p>
							remote: <b>UI/UX Design</b>: 50% (50/100), done.
						</p>
						<p>
							remote: <b>Git</b>: 95% (95/100), done.
						</p>
						<p>
							You take the blue pill, the story ends. You wake up in your bed
							and believe whatever you want to believe. You take the red pill,
							you stay in Wonderland, and I show you how deep the rabbit hole
							goes.
						</p>
						<div class='skillsprompt'>
							<p>marcupio@The-Pro %</p>
							<div class='pillbuttons'>
								<button class='bluepill btn btn-primary'>BLUE PILL</button>
								<a href='#contact'>
									<button class='redpill btn btn-danger'>RED PILL</button>
								</a>
							</div>
						</div>
					</div>
					<div class='enterthematrix'></div>
				</div>
			</div>
		</div>
	);
};

export default Show;
