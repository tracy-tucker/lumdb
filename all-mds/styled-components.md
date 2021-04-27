#Styled Components

Styled components allow you to style your application in a component-based way.

`npm install styled-components`

Example code: 

```
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