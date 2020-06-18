import React from 'react';

const DoggoProfile = ({ imgSrc }) => {
	return(
		<div className='doggoProfile'>
			<div className="imageContainer">
				<img src={imgSrc} alt="What a handsome pupper"/>
			</div>
		</div>
	)
}

export default DoggoProfile;