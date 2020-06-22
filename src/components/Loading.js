import React from 'react';
import img from '../loadingGif.gif';

const Loading = () => {
	return (
		<div className='loading'>
			<div className='loadingContainer'>
				<img src={img} alt='GIF of cartoon dog dancing'/>
			</div>
			<h2>
				Please wait while we confirm your playdate!
			</h2>
		</div>
	)
}


export default Loading;