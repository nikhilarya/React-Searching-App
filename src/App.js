import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends Component {
	constructor(props){
	  super(props);
	
	  this.state = {
	  	robots: robots,
	  	searchfield: ''
	  };
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		
	}

	render(){
		const filteredRobot = this.state.robots.filter( robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	    return(
	      <div className="tc">
	        <h1>Robo Friends </h1>
	        <SearchBox searchChange={this.onSearchChange}/>
	      	<CardList robots={filteredRobot}/>
	      </div>
	    );
	}
}

export default App;
