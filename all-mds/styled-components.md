#Styled Components

Styled components allow you to style your application in a component-based way.

`npm install styled-components`

Example code:

```
import styled from 'styled-components

render() {
    return (
        <MovieGrid>
            {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-grap: 1rem;
`;
```

Also, look at `MovieWrapper.js` for some great examples on using styled components to pass in styles to an interpolated variable.

# React Overdrive

`npm install --save react-overdrive --legacy-peer-deps`

React Overdrive is not compatible with React 17. Installing this version could lead to potentially broken dependency resolution.

React Overdrive works by IDs. It finds a unique ID on one page, matches it to the unique ID on the next page, calculates their position between them and animates it.