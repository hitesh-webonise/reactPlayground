import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header.jsx';


class App extends Component {
  state = {
    text: ''
  };

  handleText = text => {
    this.setState({
      text
    });
  }

  render() {
    return (
      <div className="wrapper">
        <h2>{this.state.text}</h2>
        <Header handleText={this.handleText} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
