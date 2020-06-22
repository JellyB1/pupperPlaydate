import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header.js';
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
			isDoggoSelection: true,
			modal: false,
			isLoading: '',
			confirmation: '',
		}
		
	}

	componentDidMount() {
		// Make Axios request
		// axios({
		// 	method: 'GET',
		// 	url: 'https://proxy.hackeryou.com',
		// 	responseType: 'json',
		// 	params: {
		// 		reqUrl:
		// 			'http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=false',
				
		// 		proxyHeaders: {
		// 			header_params: 'value',
		// 		},
		// 	},
		// 	xmlToJSON: false,
    // }).then((res) => {
    //   this.setState({
		// 		doggoURL: res.data,
		// 	})
		// });

		axios({
			method: 'GET',
			url: 'https://api.thedogapi.com/v1/images/search?apiKey=16ec4811-e569-402f-b549-dea6709fcca2&limit=20',
			responseType: 'JSON'
		}).then(res => {
			// Store the result data so its easier to work with
			const result = res.data
			
			// map over res.data and return an array due to nesting issues in res.data
			const myData = result.map(item => {
				return ({
					doggoURL: item.url,
					doggoID: item.id
				})
			})

			// push that returned array into this.state
			this.setState({
				doggo: myData,
			})
		}) // End axios request
	}

	scrollToDoggoSelection = () => {
		const doggoSelection = document.querySelector('.doggoSelection');

		document.querySelector('.viewButton').addEventListener('click', () => {
			doggoSelection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		});
	}

	openModal = () => {
		this.setState({
			modal: true,
		})
	}

	closeModal = () => {
		this.setState({
			modal: false,
		})
	}

	showLoading = () => {
		this.setState({
			isHeader: false,
			isDoggoSelection: false,
			modal: false,
			isLoading: true,
		})
	}

	randomBool = () => {
		const bool = Math.round(Math.random() * 1);

		this.setState({
			confirmation: bool,
		})
	}

	render() {
		return (
			<div className='App'>
				{/* Import Header comp */}
				{ this.state.isHeader ?
						<Header className='wrapper' clickEvent={this.scrollToDoggoSelection} />
						: null
				}

				{/* Map and return doggo profiles */}
				{this.state.isDoggoSelection ? 
					<div className='doggoSelection wrapper'>
						{this.state.doggo.map((dog) => {
							return (
								<DoggoProfile 
									key={dog.doggoID} 
									imgSrc={dog.doggoURL}
								/>
						)})}
					</div> 
					: null
				}

				{/* Display pop up modal with selected doggo to confirm selection */}
				{this.state.modal ? 
					<Modal showLoading={this.showLoading} closeEvent={this.closeModal} />
					: null
				}

				{/* Show Loading screen after doggo is selected */}
				{this.state.isLoading ? <Loading className='wrapper' /> : null}

				{/* Display either appointment confirm or declined */}
				{this.state.confrimation == true ?  <Confirmed /> : null}
				{this.state.confitmation == false ? <Declined /> : null}

			</div>
		);
	}
}

export default App;
