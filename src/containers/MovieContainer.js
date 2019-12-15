import React, { Component } from 'react'
import Movie from '../components/Movie.js'

class MovieContainer extends Component {
  state = {
    movies: this.props.movies
  }

  render() {
    return (
      this.props.movies.map((movie, i)=> {
        return <Movie 
        key={i}
        imdbId={movie.imdbID}
        title={movie.Title}
        imgSrc={movie.Poster}
        movie={movie}/>
      })
    )
  }
}

export default MovieContainer
