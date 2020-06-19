import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header>	
				<div className="wrapper">
					<div className="headerContainer">
						<h1>Pupper Play Date</h1>
						<button className="viewButton">View Puppers</button>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;