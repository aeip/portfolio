import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { usePalette } from 'react-palette';

const Music = () => {
	const [searchTerm, setSearchTerm] = useState([]);
	const [songs, setSongs] = useState([]);
	const [bg, setBg] = useState([]);
	let { data } = usePalette(bg);
	const handleInput = (e) => {
		setSearchTerm(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		let searchTermFixed = searchTerm.toString().split(' ').join('+');
		let url = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${searchTermFixed}&country=US&media=music&limit=1`;
		const getSongs = async () => {
			const apiCall = await fetch(url);
			const songs = await apiCall.json();
			setSongs(songs.results);
		};
		getSongs();
	};
	const playSong = (artwork) => {
		setBg(artwork);
    };
    const pauseSong = () => {
        setBg('')
        document.documentElement.style.setProperty('--vibrant', '#EDF1FF');
        document.documentElement.style.setProperty('--muted', '#EDF1FF');
        document.documentElement.style.setProperty('--lightVibrant', '#EDF1FF');
        document.documentElement.style.setProperty('--lightMuted', '#EDF1FF');
        document.documentElement.style.setProperty('--darkVibrant', '#EDF1FF');
        document.documentElement.style.setProperty('--darkMuted', '#EDF1FF');
    }
	return (
		<div className='music-content'>
			<h2>About Me</h2>
			<p className="about-p">Hi, I'm Stasys. I am a 22 year old software engineer who has just graduated from General Assembly's 12 week Software Engineering Immersive program. I've been programming since I was 15; developing basic websites, games, and iOS apps in Objective-C. Soon after, I started learning Swift to make an iOS app about myself for Apple's WWDC scholarship opportunity. I received a scholarship, attended WWDC, and became addicted to coding ever since. I then started doing freelance work for websites and apps using new technologies with every project. This is where I gained most of my experience because every month I would have a new project and idea to work on that served totally different purposes. I then decided to attend General Assembly to get some more experience on my portfolio before going after a software engineering position. I'm interested in working at a company now so that I can continue learning about software engineering with even bolder ideas and products.</p>
			<p className="about-p">Over the years, I have also grown to love music. Which is why I made this cool little function below. You can search for a song or artist, and then have a play button ready to preview the song from iTunes API. Once you play it, the background will change between the 5 primary colors of the album art.</p>
			<form onSubmit={handleSubmit} id='myform'>
				<InputBase
					onChange={handleInput}
					value={searchTerm}
					placeholder='Search iTunes'
					inputProps={{ 'aria-label': 'search iTunes' }}
				/>
				<IconButton onTouchStart={handleSubmit} aria-label='search' onClick={handleSubmit}>
					<SearchIcon />
				</IconButton>
			</form>
			{songs && data ? (
				<div
					className='songs-list'
					style={{
						'--vibrant': data.vibrant,
						'--muted': data.muted,
						'--lightVibrant': data.lightVibrant,
						'--lightMuted': data.lightMuted,
						'--darkVibrant': data.darkVibrant,
						'--darkMuted': data.darkMuted,
					}}>
					{songs.map((song, i) => {
						return (
							<div key={i} className='song-list-one'>
								<div className='song-list-one-top'>
									<img src={song.artworkUrl100} alt='' />
								</div>
								<div className='song-list-one-bottom'>
									<p className='trackName'>{song.trackName}</p>
									<p className='artistName'>{song.artistName}</p>
								</div>
								<audio
									src={song.previewUrl}
									type='audio/mpeg'
									onPause={pauseSong}
									onPlay={() => playSong(song.artworkUrl100)}
									controls></audio>
							</div>
						);
					})}
				</div>
			) : (
				<div className='songs-list'>
					{songs.map((song, i) => {
						return (
							<div key={i} className='song-list-one'>
								<div className='song-list-one-top'>
									<img src={song.artworkUrl100} alt='' />
								</div>
								<div className='song-list-one-bottom'>
									<p>{song.trackName}</p>
									<p>{song.artistName}</p>
								</div>
								<audio onPlay={() => playSong(song.artworkUrl100)} controls>
									<source src={song.previewUrl} type='audio/mpeg'></source>
									Your browser does not support the audio element.
								</audio>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Music;
