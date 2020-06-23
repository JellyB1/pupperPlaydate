import React from 'react';

const Modal = ({chosenPupper, showLoading, closeEvent}) => {
	return (
		<div className='modalContainer'>
			<div className='confirmationModal wrapper'>
				<div className='modalImage'>
					<img src={chosenPupper} alt="Such a handsome pupper"/>
				</div>
				<h3>Would you like to confirm your playdate?</h3>
				<div className='btn'>
					<button onClick={showLoading} className='yes'>Yes</button>
					<button onClick={closeEvent} className='no'>No</button>
				</div>
			</div>
		</div>
	)
}

export default Modal;