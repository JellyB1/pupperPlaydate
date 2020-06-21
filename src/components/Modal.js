import React from 'react';

const Modal = () => {
	return (
		<div className='modalContainer'>
			<div className='confirmationModal wrapper'>
				<div className='modalImage'>
					<img src="" alt="Such a handsome pupper"/>
				</div>
				<h3>Would you like to confirm your playdate?</h3>
				<div className='btn'>
					<button className='yes'>Yes</button>
					<button className='no'>No</button>
				</div>
			</div>
		</div>
	)
}

export default Modal;