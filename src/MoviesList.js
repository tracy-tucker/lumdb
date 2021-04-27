import React, { Component } from 'react';
import Movie from './movie';
import styled from 'styled-components';

//When iterating, key is important because that's how React
//keeps track of the items you are iterating.
//Key does NOT have to be `id`, it just needs to be a unique value.
class MoviesList extends Component {

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