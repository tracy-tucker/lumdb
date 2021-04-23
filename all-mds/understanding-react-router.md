# Understanding React Router

`react-router-dom` is the "front-side" or "client-side" router:

`npm-install-react-router-dom`

Go to your `App` file and import Router, then wrap your `div` with `<Router>`:

```
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
```

You are reassigning `BrowserRouter` to the name, `Router`.

Then, use this within your component:

```
render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Route path="test" component={Test}>
          {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
      </Router>
    );
  }
  ```

  By installing React Router, we have now given our component React's routing library. This is a simple API with powerful features like lazy code loading, dynamic rout matching and location transition handling.

  `<Route>` will check the path of the route. If this route is true, then `<Route>` will send the browser to the designated component path.

  Think of React Router like a "gate-keeper" to the browser destination.