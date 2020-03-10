import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './modalCSS.css';

class ModalContent extends Component {
  constructor() {
    super();
    this.state = {
      movie: []
    };
  }

  componentDidMount() {
    this.setState({ movie: this.props.movieDetails });
    console.log('Mounted!');
  }

  handleSubmit = () => {
    // console.log(this.state.movie);
    const valueEntered = document.getElementById('seatInput').value;
    const seatPresent = this.state.movie.seatsAvailable;
    console.log('Value Entered: ' + valueEntered);
    console.log('Seats Available: ' + seatPresent);
    if (valueEntered > seatPresent) {
      alert("You can't book more than the Available Seats");
    } else {
      //Here goes the order confirmation part
      // this.props.history.push('/booking');
      // new Booking().updateData(this.state.movie);
      window.localStorage.name = this.state.movie.name;
      window.localStorage.poster = this.state.movie.poster;
      window.localStorage.seat = valueEntered;

      if (window.localStorage.seat != null) {
        this.props.func();
      }
    }
  };

  render() {
    return ReactDOM.createPortal(
      <aside
        className="modal-cover"
        onKeyDown={this.props.keyDown}
        tabIndex="-1"
        onClick={this.props.onClickOutside}
      >
        <div className="modal-area" ref={this.props.modalRef}>
          <button
            className="_modal-close"
            onClick={this.props.closeModal}
            ref={this.props.buttonRef}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>

          <div className="modal-body tc">
            <div className="tc">
              <h1>Book Movies Online</h1>
              <img alt="movies" src={`${this.state.movie.poster}`} />
              <h2>{this.state.movie.name}</h2>
              <div>
                <h4>Available Seats: {this.state.movie.seatsAvailable}</h4>
              </div>
              <h3>How many seats ?</h3>
              <input
                type="number"
                id="seatInput"
                className="tc br4 pa1"
                placeholder="Enter Number of Seats"
              />
              <button
                className="tc dim white bg-black pa1 mh2"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </aside>,
      document.body
    );
  }
}

export default ModalContent;
