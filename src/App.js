import React, { Component } from 'react';
import axios from 'axios';
import Header from "./components/Header.js";
import DoggoProfile from "./components/DoggoProfile.js";
import './App.css';

class  App extends Component {
	constructor() {
		super();
		this.state = {
			
				doggoURL: [],
				
			
		}
		
	}

	componentDidMount() {
		// Make AJAX request
		axios({
			method: 'GET',
			url: 'https://proxy.hackeryou.com',
			responseType: 'json',
			params: {
				reqUrl:
					'http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=false',
				
				proxyHeaders: {
					header_params: 'value',
				},
			},
			xmlToJSON: false,
    }).then((res) => {
      this.setState({
				doggoURL: res.data,
			})
    });
		
	}

	render() {
		return (
			<div className="App">
				{/* Import Header comp */}
				
				<Header className='wrapper'/>

				{/* Map and return doggo profiles */}
				<div className="doggoSelection wrapper">
					{this.state.doggoURL.map((doggie) => {
						return (
							<DoggoProfile 
								key={doggie} 
								imgSrc={doggie}
							/>
					)})}
				</div> 
				
			</div>
		);
	}
}

export default App;
