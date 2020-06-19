import React from 'react';

const DoggoProfile = ({ imgSrc, clickEvent }) => {
	return(
		<div className='doggoProfile'>
			
			<div className='imageContainer'>
				<img src={imgSrc} alt="What a handsome pupper"/>
			</div>
			<div className='online'>
				<p>
					<i className='fas fa-bone'></i>
					Online Now!
				</p>
			</div>
			<button onClick={clickEvent}>
				<i className='fas fa-paw'></i>
				Select me!
			</button>
		</div>
	)
}

export default DoggoProfile;