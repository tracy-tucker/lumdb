import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    toggle: true
  }

  // Arrow function is needed when using this.state
  // setState is a built-in method that updates state
  // this.toggle.state is used because it is changing state to whatever its opposite is.
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to Using Props" toggle={this.state.toggle} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.state.toggle &&
            <p>This should show and hide</p>
          } 
        <button onClick={this.toggle}>Show / Hide</button>
        <br/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    console.log(toggle);
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
