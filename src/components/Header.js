import React from 'react';

const Header = ({clickEvent}) => {	
	return (
		<header>	
			<div className="wrapper">
				<div className="headerContainer">
					<h1>Pupper Play Date</h1>
					
					<button 
						onClick={clickEvent} 
						className="viewButton">
							View Puppers
					</button>
				</div>
			</div>
		</header>
	)
}


export default Header;