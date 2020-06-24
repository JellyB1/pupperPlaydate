import React from 'react';
import img from '../assets/declined.gif';

const refreshPage = () => {
	window.location.reload();
}

const Declined = () => {
	return (
		<div className='wrapper'>
			<div className='declined'>
				<i class="fas fa-times-circle"></i>
				<h3>Oh no! Your playdate has been declined!</h3>
			
				<div className='imgCD'>
					<img src={img} alt='Sleepy pupper animated gif'/>
				</div>
			
				<button type='submit' onClick={refreshPage}>Try again!</button>
			</div>
		
		
		</div>
	)
}

export default Declined;