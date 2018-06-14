import React, { Component } from 'react';

export default class Header extends Component {
  state = {
    changeBg: ''
  };
  
  handleClick = () => {
    if (this.state.changeBg == '') {
      this.setState({
        changeBg: 'inputBox-change'
      });
    }
    else {
      this.setState({
        changeBg: ''
      });
    }
  }

  render() {
    return (
      <div className={`inputBox ${this.state.changeBg}`}>
        <input type="text" onBlur={event =>  this.props.handleText(event.target.value) } />
        <button onClick={this.handleClick}>change</button>
      </div>
    );
  }
}
