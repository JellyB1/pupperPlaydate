import React, { Component } from 'react';
import axios from 'axios';
import Header from "./components/Header.js";
import DoggoProfile from "./components/DoggoProfile.js";
import './App.css';

class  App extends Component {
	constructor() {
		super();
		this.state = {
			doggo: [],
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
					'http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=false',
				
				proxyHeaders: {
					header_params: 'value',
				},
			},
			xmlToJSON: false,
    }).then((res) => {
      this.setState({
				doggo: res.data,
			})
    });
		
	}

	render() {
		return (
			<div className="App">
				{/* Import Header comp */}
				<Header />

				{/* Map and return doggo profiles */}
				{this.state.doggo.map((dog) => {
					return (
						<DoggoProfile 
							key={dog} 
							imgSrc={dog}
						/>
				)})} 
				
			</div>
		);
	}
}

export default App;
