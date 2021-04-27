// import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// MovieDB's syntax in order to pull in poster images.
// `w154` is the image size.
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

// Stateless Function
// ES Object Destructuring - instead of passing in `props`, which
// is the whole object, you can just pass in `movie` as the variable.
const Movie = ({ movie }) => (
        <Link to={`/${movie.id}`}>
        <   Poster src={`${POSTER_PATH}${movie.poster_path}`} alt='{movie.title}' />
        </Link>
);

export default Movie;

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

// Define your prop types
    // .isRequired on EVERY REQUIRED PROP. Does not crash app,
    // but will not display error object.
    // A static stateless component only works within a Class
    // Component.
    // static propTypes = {
    //     movie: PropTypes.shape({
    //         title: PropTypes.string.isRequired
    //     }),
    // }

    export const Poster = styled.img`
        box-shadow: 0 0 35px black;
    `;