import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title} />
                <h1>{title}</h1>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
}

function MoviePoster({ poster, alt }) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

function MovieGenre({ genre }) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

MovieGenre.prototype = {
    genre: PropTypes.string.isRequired
}

export default Movie