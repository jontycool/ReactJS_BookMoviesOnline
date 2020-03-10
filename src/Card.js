import React, { Component } from 'react';
import Modal from './modal';
import './Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      movie: []
    };
  }

  componentDidMount() {
    this.setState({ movie: this.props.movieDetails });
  }

  render() {
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card">
        <img alt="movies" src={`${this.state.movie.poster}`} />
        <div>
          <h2>{this.state.movie.name}</h2>
          <p>{this.state.movie.lang}</p>
          <Modal func={this.props.func} movieDetails={this.state.movie} />
        </div>
      </div>
    );
  }
}

export default Card;
