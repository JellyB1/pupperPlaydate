import React from 'react';
import img from '../assets/confirmed.gif'

const Confirmed = () => {
	return (
		<div  className='wrapper'>
			<div className='confirmed'>
				<i class="fas fa-check-circle"></i>
				<h3>Yay! Your playdate has been confirmed!</h3>
			</div>
			<div className='imgCD'>
				<img src={img} alt='Happy pupper ready to play!'/>
			</div>
		</div>
	)
}

export default Confirmed;