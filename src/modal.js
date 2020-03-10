import React, { Component } from 'react';
import ModalButton from './modalButton';
import ModalContent from './modalContent';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false
    };
  }

  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
  };

  closeModal = () => {
    this.setState({ isShown: false });
    this.triggerButton.focus();
  };

  onKeyDown = event => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };

  onClickOutside = event => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  render() {
    return (
      <React.Fragment>
        <ModalButton
          show={this.showModal}
          buttonRef={n => (this.triggerButton = n)}
        />
        {this.state.isShown ? (
          <ModalContent
            closeModal={this.closeModal}
            keyDown={this.onKeyDown}
            modalRef={n => (this.modal = n)}
            buttonRef={n => (this.closeButton = n)}
            onClickOutside={this.onClickOutside}
            func={this.props.func}
            movieDetails={this.props.movieDetails}
          />
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
