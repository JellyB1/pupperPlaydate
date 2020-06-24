import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import DoggoProfile from './components/DoggoProfile.js';
import Modal from './components/Modal.js';
import Loading from './components/Loading.js';
import Confirmed from './components/Confirmed.js';
import Declined from './components/Declined.js';
import './App.css';

class  App extends Component {
	constructor() {
		super();
		
		this.state = {
			doggo: [],
			isHeader: true,
			isNavbar: false,
			isDoggoSelection: true,
			isChosenOne: '',
			modal: false,
			isLoading: '',
			confirmation: '',
		};	
	}

	async componentDidMount() {
		// Make Axios request
		try {
			await axios({
				method: 'GET',
				url: 'https://api.thedogapi.com/v1/images/search?apiKey=16ec4811-e569-402f-b549-dea6709fcca2&limit=20',
				responseType: 'JSON',
			}).then(res => {
				// Store the result data so its easier to work with
				const result = res.data;
				
				// map over res.data and return an array due to nesting issues in res.data
				const myData = result.map(item => {
					return ({
						doggoURL: item.url,
						doggoID: item.id
					});
				});

				// push that returned array into this.state
				this.setState({
					doggo: myData,
				});
			}); // End axios request
		} catch {
			alert("Oh no! Something doesn't seem right!")
		}
	}

	scrollToDoggoSelection = () => {
		const doggoSelection = document.querySelector('.doggoSelection');

		document.querySelector('.viewButton').addEventListener('click', () => {
			doggoSelection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}

	openModal = (event) => {
		const chosenDoggo = event.target.value;
	
		this.setState({
			modal: true,
			isDoggoSelection: false,
			isChosenOne: chosenDoggo,
		});
	}

	closeModal = () => {
		this.setState({
			isHeader: false,
			isNavbar: true,
			isDoggoSelection: true,
			modal: false,
		});
	}

	randomBool = () => {
		let bool = Math.round(Math.random() * 9);

		if (bool % 2) {
			bool = true;
		} else {
			bool = false;
		};

		this.setState({
			confirmation: bool,
			isLoading: false,
		});
	}

	showLoading = () => {
		// A timeout to create the illusion that someone on the other side is responding to your request
		const randomInterval = Math.round((Math.random() * 5) * 1000);
		
		setTimeout(this.randomBool, randomInterval);

		this.setState({
			isHeader: false,
			isNavbar: true,
			isDoggoSelection: false,
			modal: false,
			isLoading: true,
		});
	}

	render() {
		return (
			<div className='App'>
				{/* Import Header comp */}
				{ this.state.isHeader ?
						<Header className='wrapper' clickEvent={this.scrollToDoggoSelection} />
						: null
				}

				{/* Navbar for display after first Doggo Selection view */}
				{this.state.isNavbar ? <Navbar /> : null}

				{/* Map and return doggo profiles */}
				{this.state.isDoggoSelection ? 
					<div className='doggoSelection wrapper'>
						{this.state.doggo.map((dog) => {
							
							return (
								<DoggoProfile 
									key={dog.doggoID} 
									id={dog.doggoID} 
									imgSrc={dog.doggoURL}
									openModal={this.openModal}
								/>
						)})}
					</div> 
					: null
				}

				{/* Display pop up modal with selected doggo to confirm selection */}
				{this.state.modal ? 
					<Modal chosenPupper={this.state.isChosenOne} showLoading={this.showLoading} closeEvent={this.closeModal} />
					: null
				}

				{/* Show Loading screen after doggo is selected */}
				{this.state.isLoading ? <Loading className='wrapper' /> : null}

				{/* Display either appointment confirm or declined */}
				{this.state.confirmation === true ? <Confirmed /> :
				this.state.confirmation === false ? <Declined /> :
				null}

			</div>
		);
	}
}

export default App;
