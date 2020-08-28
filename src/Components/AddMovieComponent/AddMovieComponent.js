import React from 'react';

import { Dialog, DialogOverlay } from '@reach/dialog';
import Button from '../Base/Button';
import IconComponent from '../Base/IconComponent';
import ModalWindow from '../ModalWIndow';
import Heading from '../Base/Heading';
import AddMovieForm from '../AddMovieForm';

class AddMovieComponent extends React.Component {
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
        <Button variant="with-icon" onClick={this.showModal}>
          <IconComponent xlinkHref="#icons-sprite_plus" size="small" color="primary" classList="margin-right-1" />
          add movie
        </Button>
        <Dialog
          className="modal"
          isOpen={show}
          onDismiss={this.hideModal}
          aria-label="add movie modal window"
        >
          <ModalWindow isOpen={show} handleHide={this.hideModal}>
            <Heading headingLevel={2} classList="h1">add movie</Heading>
            <AddMovieForm />
          </ModalWindow>
          <DialogOverlay className="modal__overlay" onDismiss={this.hideModal} />

        </Dialog>
      </>

    );
  }
}

export default AddMovieComponent;
