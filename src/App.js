import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieContainer from './containers/MovieContainer.js'


class App extends Component {
  state = {
    inputText: '',
    movies: [],
  }

  componentDidMount() {
  }

  handleSearch = (e) => { 
    let url='http://www.omdbapi.com/?apikey=3a55a9e6&s='+this.state.inputText
    fetch(url, {method: 'get'})
      .then(response=> response.json())
      .then(body=> {
        this.setState({movies: body.Search})
        console.log(this.state.movies)
      })
  }
  
  handleInput = (e) => {
    this.setState({inputText: e.target.value})
  }


  render(){
  return (
      <div className="App">
        <p>Movie Search</p>  
        <input
          onChange={this.handleInput}
          value={this.state.inputText}
        />
        <button onClick={this.handleSearch}>click here</button>
          <div className="movieContainer">
           {
           this.state.movies.length === 0
           ? "loading..."
           : <MovieContainer movies={this.state.movies} />
           }
          </div>
    </div>
  );
 }
}

export default App;
