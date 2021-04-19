import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

const movies = [
  {
    id: 1,
  title: "Star Wars"
  }, {
    id: 2,
  title: "Star Man"
  }, {
    id: 3,
  title: "36th Chamber of Shaolin"
  }
];

//When iterating, key is important because that's how React
//keeps track of the items you are iterating.
//Key does NOT have to be `id`, it just needs to be a unique value.
class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => (
          <div key={movie.id}>
            {movie.title}
          </div>
          ))}
      </div>
    );
  }
}

export default App;


// DELETED CODE, controlled VS uncontrolled:

// state = {
//   input: "Hello"
// }

//Arrow function being used so that we have access to the keyword, "this"
//and have it refer to the component itself.
// updateInput = (event) => {
//   this.setState({
//     input: event.target.value
//   })
// }

// Arrow function is needed when using this.state
// Arrow function belongs to the object that CALLS the function
// setState is a built-in method that updates state
// this.toggle.state is used because it is changing state to whatever its opposite is.
// submit = () => {
//   console.log(this.text.value)
// }

// <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <h3>{this.state.input}</h3>
//           <input type="text" onChange={this.updateInput} value={this.state.input} />
//            {/* SEE REFS-AND-INPUTS.MD NOTES ON REF */}
//           <input type="text" ref={(input) => this.text = input }/>
//         <button onClick={this.submit}>Show Value</button>
//         <br/>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>