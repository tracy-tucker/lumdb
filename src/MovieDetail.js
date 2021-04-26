import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {

  state = {
    movie: {},
  }

  // Study async/await/promises
  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=5111df993a54ce3b4798d6295751075f&language=en-US`);
      const movie = await res.json();
      console.log(movie.id)
      //`movie: movie` is the same as `movie,` in ES6 update
      this.setState({
        movie,
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    // console.log(this.state.movies)
    const { movie } = this.state;
    return (
        <div>
            <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt='{movie.title}' />
            <img src={`${POSTER_PATH}${movie.poster_path}`} alt='{movie.title}' />
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
        </div>
    );
  }
}

export default MovieDetail;