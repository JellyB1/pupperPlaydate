import React, {Component} from 'react';

class Header extends Component {

	scrollToDoggoSelection = () => {
		const doggoSelection = document.querySelector('.doggoSelection');

		document.querySelector('.viewButton').addEventListener('click', () => {
			doggoSelection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		});
	}
	
	render() {
		
		return (
			<header>	
				<div className="wrapper">
					<div className="headerContainer">
						<h1>Pupper Play Date</h1>
						
						<button 
							onClick={this.scrollToDoggoSelection} 
							className="viewButton">
								View Puppers
						</button>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;