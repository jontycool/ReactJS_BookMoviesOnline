import React, { Component } from 'react';
import './booking.css';

class Booking extends Component {
  constructor() {
    super();
    this.state = {
      movie: []
    };
  }

  clearFunction = () => {
    window.localStorage.clear();
    window.open('about:blank', '_self');
    window.close();
  };

  homeFunction = () => {
    window.localStorage.clear();
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        {window.localStorage.seat > 0 ? (
          <div className="tc">
            <h1 className="tc mt5">Your Ticket Confirmation</h1>
            <div className="flex flex-wrap justify-center infoCard">
              <div className="pa2 mr3">
                <img
                  alt="bookPoster"
                  src={`${window.localStorage.poster}`}
                  className="mainPoster"
                />
              </div>
              <div className="pa2 ml3">
                <h2 className="tc mt4">
                  Movie Name: {window.localStorage.name}
                </h2>
                <h3 className="tc mt4">
                  Seats Booked: {window.localStorage.seat}
                </h3>
                <h3 className="tc mt4">
                  Venue: Kalam Center, Prodapt Solutions
                </h3>
                <img
                  alt="qr"
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${window.localStorage.name}`}
                  className="qrImg mt4"
                />
                <p className="mt4">
                  Your Tickets have been confirmed for{' '}
                  {window.localStorage.name} movie.
                </p>
                <p>Please show the QR Code while entering the Venue.</p>
              </div>
            </div>
            <button
              className="tc f6 link dim ph3 pv2 mb2 mt5 mr4 dib white bg-black"
              onClick={this.clearFunction}
            >
              Close
            </button>
            <button
              className="tc f6 link dim ph3 pv2 mb2 mt5 ml4 dib white bg-black"
              onClick={this.homeFunction}
            >
              Home
            </button>
          </div>
        ) : (
          <div className="tc">
            <h1 className="tc mt7">ERROR !! Page Not Found</h1>
            <button
              className="tc f6 link dim ph3 pv2 mb2 mt5 dib white bg-black"
              onClick={this.homeFunction}
            >
              Home
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Booking;
