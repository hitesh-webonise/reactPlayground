import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';
import { createStore } from 'redux';


class App extends Component {
	constructor() {
		super();
			this.state = {
				text: ''
			};
		this.handleText = this.handleText.bind(this);
	}

	handleText (text){
		this.setState({
			text
		});
	}

	render() {
		return (
			<div className="wrapper">
				<h2>{this.state.text}</h2>
				<Header handleText = {this.handleText} />
			</div>
		);
	}
}


ReactDom.render(<App />, document.getElementById('root'));
