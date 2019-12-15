import React, { Component } from "react";

class Movie extends Component {
  state = {
    movie: this.props.movie,
    actors: ''
  }
  
  componentDidMount () {
    let url='http://www.omdbapi.com/?apikey=3a55a9e6&i='+this.props.imdbId
    console.log(url);
    fetch(url, {method: 'get'})
      .then(response=> response.json())
      .then(body=> {
         this.setState({actors: body.Actors})
      })
  }



  render() {
    return (
      <div className='movie'>
       <br />
      
        <h3>Title:{this.props.title} </h3>
        <img src={this.props.imgSrc} alt="poster" />
        <div><strong>Starring: </strong> {this.state.actors}</div>
      
        <br />
      </div>
    )
  }
}

export default Movie;
