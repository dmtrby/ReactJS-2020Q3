import React from 'react';

import { Dialog, DialogOverlay } from '@reach/dialog';
import {
  MenuItem,
} from '@reach/menu-button';

import Button from '../Base/Button';
import ModalWindow from '../ModalWIndow';
import Heading from '../Base/Heading';

class RemoveMovieComponent extends React.Component {
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
          Remove
        </MenuItem>
        <Dialog
          className="modal"
          isOpen={show}
          onDismiss={this.hideModal}
          aria-label="remove movie modal window"
        >
          <ModalWindow isOpen={show} handleHide={this.hideModal}>
            <Heading headingLevel={2} classList="h1">delete movie</Heading>
            <form className="movie-form container">
              <div className="row">
                <div className="col-xs-12">
                  Are you sure you want to delete this movie?
                </div>
                <div className="col-xs-12 margin-top-4">
                  <div className="row end-xs">
                    <Button type="submit" text="Confirm" variant="primary" classList="margin-left-lg-2 margin-top-lg-0 margin-top-xs-1" />
                  </div>
                </div>
              </div>
            </form>
          </ModalWindow>
          <DialogOverlay className="modal__overlay" onDismiss={this.hideModal} />
        </Dialog>
      </>

    );
  }
}

export default RemoveMovieComponent;
