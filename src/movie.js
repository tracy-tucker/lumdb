import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Movie extends Component {
    // Define your prop types
    // .isRequired on EVERY REQUIRED PROP. Does not crash app,
    // but will not display error object.
    static propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        desc: PropTypes.string
    }
    // You cannot have defaultProps on nested props.
    static defaultProps = {
        desc: 'Description not available'
    }
    render() {
        return (
            <div>
                <h3>{this.props.movie.title}</h3>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}