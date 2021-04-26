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

  # Switch Routes
  Make sure to add it to your imports
  ```
  import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
```

Remember Switch in JS. It's like a big If/Else - it takes in an argument and will spit out one result based on a particular check.

Example:

```
<Switch>
  <Route path="/" component={MoviesList} />
  <Route path="/test" component={Test} />
</Switch>
```

BUT! Order of operation matters.
The above will show `{Test}` with a list of movies because `Switch` is checking for `/` first in the order or Routes!
Instead of worrying about order of operation, the better solution would be to use the `exact` prop:

```
<Switch>
  <Route exact path="/" component={MoviesList} />
  <Route path="/test" component={Test} />
</Switch>
```

The prop `exact` is the same as `exact={true}`, but refactored it is just `exact`.

# Match
`match` is where params are stored within React-Router