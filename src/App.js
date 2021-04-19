import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    input: "Hello"
  }

  //Arrow function being used so that we have access to the keyword, "this"
  //and have it refer to the component itself.
  updateInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  // Arrow function is needed when using this.state
  // Arrow function belongs to the object that CALLS the function
  // setState is a built-in method that updates state
  // this.toggle.state is used because it is changing state to whatever its opposite is.
  submit = () => {
    console.log(this.text.value)
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to Using Props" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h3>{this.state.input}</h3>
          <input type="text" onChange={this.updateInput} value={this.state.input} />
           {/* SEE REFS-AND-INPUTS.MD NOTES ON REF */}
          <input type="text" ref={(input) => this.text = input }/>
        <button onClick={this.submit}>Show Value</button>
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
    const { text } = this.props;
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
