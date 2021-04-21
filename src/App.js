import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';

// const movies = [
//   {
//     id: 1,
//     title: "Star Wars",
//     desc: "A space movie"
//   }, {
//     id: 2,
//     title: "Star Man"
//   }, {
//     id: 3,
//     title: "36th Chamber of Shaolin"
//   }, {
//     id: 4,
//     title: "5 Deadly Venoms"
//   }
// ];

//When iterating, key is important because that's how React
//keeps track of the items you are iterating.
//Key does NOT have to be `id`, it just needs to be a unique value.
class App extends Component {

  state = {
    movies: []
  }

  // Study async/await/promises
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=5111df993a54ce3b4798d6295751075f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
      const movies = await res.json();
      // console.log(movies.results)
      this.setState({
        movies: movies.results
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    // console.log(this.state.movies)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
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