import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import { movies } from './moviesList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // movies: [],
      searchField: ''
    };
  }

  // componentDidMount() {
  //   fetch('http://www.omdbapi.com/?apikey=c7db21b7&t=Subh')
  //     .then(response => response.json())
  //     .then(results => this.setState({ movies: results }));

  // }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  submitButton = () => {
    this.props.history.push('/booking');
  };

  render() {
    const filteredMovies = movies.filter(movie => {
      return movie.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">Book Movies Online</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList movies={filteredMovies} func={this.submitButton} />
        </Scroll>
      </div>
    );
  }
}

export default App;
