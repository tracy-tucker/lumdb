import React, { Component } from 'react';


class MovieDetail extends Component {

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
        <div>
            <h1>Hello</h1>
        </div>
    );
  }
}

export default MovieDetail;