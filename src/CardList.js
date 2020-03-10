import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      movieList: []
    };
  }

  componentDidMount() {
    this.setState({ movieList: this.props.movies });
  }

  render() {
    return (
      <div className="pa2">
        {this.state.movieList.map((user, i) => {
          return (
            <Card
              movieDetails={this.state.movieList[i]}
              func={this.props.func}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
