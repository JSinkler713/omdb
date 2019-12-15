import React, { Component } from "react";

class Movie extends Component {
  state = {
    movie:'',
    actors: '',
    plot:''
  }
  


  componentDidMount() {
    this.setState({actors: '', plot: ''})
  }
  onClick = ()=> {
    let url='http://www.omdbapi.com/?apikey=3a55a9e6&i='+this.props.imdbId
    console.log(url);
    fetch(url, {method: 'get'})
      .then(response=> response.json())
      .then(body=> {
        console.log(body.Actors)
        this.setState({actors: body.Actors})
      })
  }

  onClickPlot = ()=> {
    let url='http://www.omdbapi.com/?apikey=3a55a9e6&i='+this.props.imdbId
    console.log(url);
    fetch(url, {method: 'get'})
      .then(response=> response.json())
      .then(body=> {
        this.setState({plot: body.Plot})
      })
  }

  render() {
    return (
      <div className='movie'>
        <h3>Title:{this.props.title} </h3>
        <p>{this.props.year}</p>
        <img src={this.props.imgSrc} alt="poster" />
        <div><button onClick={this.onClick}><strong>Starring: </strong></button>
        {
          this.state.actors.length === 0
            ? 'Loading'
            :<span> {this.state.actors}</span>
        }
        </div>
        <div><button onClick={this.onClickPlot}><strong>Plot: </strong></button>
        {
          this.state.plot.length === 0
            ? 'Loading'
            :<p> {this.state.plot}</p>
        }
      </div>
      </div>
    )
  }
}

export default Movie;
