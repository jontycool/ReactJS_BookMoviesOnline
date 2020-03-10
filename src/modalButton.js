import React, { Component } from 'react';

class ModalButton extends Component {
  render() {
    return (
      <button
        className="f6 link dim ph3 pv2 mb2 dib white bg-black"
        onClick={this.props.show}
        ref={this.props.buttonRef}
      >
        Book Now
      </button>
    );
  }
}

export default ModalButton;
