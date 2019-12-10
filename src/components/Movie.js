import React, { Component } from "react";


class Movie extends Component {
  render() {
    return (
        <div>
          <div> this is some text about a specific movie </div>
          <div className="actors">
          {this.props.actors}
          </div>
          <div className="title">
            {this.props.title}
          </div>
          <img className="image" src={this.props.poster} alt='movie poster'></img>
        </div>
   )
 }
  }

export default Movie;
