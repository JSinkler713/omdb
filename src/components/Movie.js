import React, { Component } from "react";

class Movie extends Component {
  state = {
    movie:'',
    actors: ''
  }
  
  resetMovieState = ()=> {
    let url='http://www.omdbapi.com/?apikey=3a55a9e6&i='+this.props.imdbId
    console.log(url);
    fetch(url, {method: 'get'})
      .then(response=> response.json())
      .then(body=> {
        console.log(body.Actors)
        this.setState({movie: body})
      })
  }



  componentDidMount () {
    let url='http://www.omdbapi.com/?apikey=3a55a9e6&i='+this.props.imdbId
    console.log(url);
    fetch(url, {method: 'get'})
      .then(response=> response.json())
      .then(body=> {
        console.log(body.Actors)
        this.setState({movie: body})
      })
  }

  render() {
    return (
      <div className='movie'>
        <h3 onChange={this.resetMovieState()}>Title:{this.props.title} </h3>
        <p>{this.props.year}</p>
        <img src={this.props.imgSrc} alt="poster" />
        <div><strong>Starring: </strong> {this.state.movie.Actors}</div>
      </div>
    )
  }
}

export default Movie;
