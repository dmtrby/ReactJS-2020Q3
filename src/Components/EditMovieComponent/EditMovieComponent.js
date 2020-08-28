import React from 'react';

import { Dialog, DialogOverlay } from '@reach/dialog';
import {
  MenuItem,
} from '@reach/menu-button';
import ModalWindow from '../ModalWIndow';
import Heading from '../Base/Heading';
import AddMovieForm from '../AddMovieForm';

class EditMovieComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({
      show: true,
    });
  }

  hideModal = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const { show } = this.state;
    return (
      <>
        <MenuItem
          className="button button--text movie-card__menu-item"
          onClick={this.showModal}
          onSelect={this.showModal}
        >
          Edit
        </MenuItem>
        <Dialog
          className="modal"
          isOpen={show}
          onDismiss={this.hideModal}
          aria-label="edit movie modal window"
        >
          <ModalWindow isOpen={show} handleHide={this.hideModal}>
            <Heading headingLevel={2} classList="h1">edit movie</Heading>
            <AddMovieForm />
          </ModalWindow>
          <DialogOverlay className="modal__overlay" onDismiss={this.hideModal} />

        </Dialog>
      </>

    );
  }
}

export default EditMovieComponent;
