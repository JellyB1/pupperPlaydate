import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import DoggoProfile from './components/DoggoProfile.js';
// import img from './loadingGif.gif';
import Loading from './components/Loading.js';
import './App.css';

class  App extends Component {
	constructor() {
		super();
		this.state = {
			doggo: [],
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

	render() {
		return (
			<div className='App'>
				{/* Import Header comp */}
				<Header className='wrapper'/>

				{/* Map and return doggo profiles */}
				<div className='doggoSelection wrapper'>
					{this.state.doggo.map((dog) => {
						return (
							<DoggoProfile 
								key={dog.doggoID} 
								imgSrc={dog.doggoURL}
							/>
					)})}
				</div> 
				
				<Loading className='wrapper' />
			
					{/* <div className="loading">
						<img src={img} alt='GIF of cartoon dog dancing'/>
					</div> */}

			</div>
		);
	}
}

export default App;
