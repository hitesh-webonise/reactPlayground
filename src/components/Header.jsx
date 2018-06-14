import React, { Component } from 'react';

export default class Header extends Component {
	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		let inputBox = document.querySelector('.inputBox');
		if (!Array.from(inputBox.classList).includes('inputBox-change'))
			inputBox.className += " inputBox-change";
	}

	render() {
		return (
			<div className="inputBox">
				<input type="text" onBlur = {(event) => {this.props.handleText(event.target.value)}}/>
				<button onClick={this.handleClick}>change</button>
			</div>
		);
	}
}
