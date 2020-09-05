import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogOverlay } from '@reach/dialog';
import Button from '../Base/Button';
import IconComponent from '../Base/IconComponent';
import ModalWindow from '../ModalWIndow';
import Heading from '../Base/Heading';
import AddMovieForm from '../AddMovieForm';

const AddMovieComponent = ({ addMovie, ...otherProps }) => {
  const [show, setModal] = useState(false);
  return (
    <>
      <Button variant="with-icon" onClick={() => setModal(!show)}>
        <IconComponent xlinkHref="#icons-sprite_plus" size="small" color="primary" classList="margin-right-1" />
        add movie
      </Button>
      <Dialog
        className="modal"
        isOpen={show}
        onDismiss={() => setModal(!show)}
        aria-label="add movie modal window"
      >
        <ModalWindow isOpen={show} handleHide={() => setModal(!show)}>
          <Heading headingLevel={2} classList="h1">add movie</Heading>
          <AddMovieForm hideModal={() => setModal(!show)} onSubmit={addMovie} {...otherProps} />
        </ModalWindow>
        <DialogOverlay className="modal__overlay" onDismiss={() => setModal(!show)} />

      </Dialog>
    </>

  );
};

AddMovieComponent.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default AddMovieComponent;
