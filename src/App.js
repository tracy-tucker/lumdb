import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

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
const App = () => (
  <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
);

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