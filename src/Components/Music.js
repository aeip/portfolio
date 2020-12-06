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
			<h2>Music Player</h2>
			<form onSubmit={handleSubmit}>
				<InputBase
					onChange={handleInput}
					value={searchTerm}
					placeholder='Search iTunes'
					inputProps={{ 'aria-label': 'search iTunes' }}
				/>
				<IconButton type='submit' aria-label='search'>
					<SearchIcon />
				</IconButton>
			</form>
			{songs && data ? (
				<div className='songs-list'
                    style={{"--vibrant": data.vibrant, "--muted": data.muted, "--lightVibrant": data.lightVibrant, "--lightMuted": data.lightMuted, "--darkVibrant": data.darkVibrant, "--darkMuted": data.darkMuted}}>
					{songs.map((song, i) => {
						return (
							<div key={i} className='song-list-one'>
								<div className='song-list-one-top'>
									<img src={song.artworkUrl100} alt='' />
								</div>
								<div className='song-list-one-bottom'>
									<p className="trackName">{song.trackName}</p>
									<p className="artistName">{song.artistName}</p>
								</div>
								<audio
									src={song.previewUrl}
									type='audio/mpeg'
									onPause={pauseSong}
									onPlay={() => playSong(song.artworkUrl100)}
									controls>
								</audio>
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
