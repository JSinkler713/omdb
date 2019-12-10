import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie.js'


class App extends Component {
  state = {
    inputText: '',
    url:'http://www.omdbapi.com/?apikey=3a55a9e6&t=',
    movies: [],
    title: '',
    actors: ''
  }

  componentDidMount() {
    let url = 'http://www.omdbapi.com/?apikey=3a55a9e6&t=alladin'
    let options = { method: 'get' }
    fetch(url, options)
      .then(response=> response.json())
      .then(body=> {
        this.setState({movies: body})
      })
  }
  handleSearch = (e) => { 
    let url='http://www.omdbapi.com/?apikey=3a55a9e6&t='+this.state.inputText
    fetch(url, {method: 'get'})
      .then(response=> response.json())
      .then(body=> {
        this.setState({movies: body, title: body.Title, actors: body.Actors})
        console.log(this.state.movies)
      })
      //.then(()=>this.setState({title: this.state.movies.Title}))
      //.then(()=>this.setState({actors: this.state.movies.Actors}))
  }
  
  handleInput = (e) => {
    this.setState({inputText: e.target.value})
  }


  render(){
    console.log(this.state.actors)
  return (
    <div className="App">
      <p>Hello</p>  
      <input
          onChange={this.handleInput}
          value={this.state.inputText}
        />
        <button onClick={this.handleSearch}>click here</button>
    this.state.  
      <Movie  actors={this.state.actors} title={this.state.title} poster={this.state.movies.Poster}/>
    </div>
  );
}
}
export default App;
