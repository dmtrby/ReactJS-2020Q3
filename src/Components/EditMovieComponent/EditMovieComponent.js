import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogOverlay } from '@reach/dialog';
import { MenuItem } from '@reach/menu-button';
import ModalWindow from '../ModalWIndow';
import Heading from '../Base/Heading';
import AddMovieForm from '../AddMovieForm';

const EditMovieComponent = ({ editMovie, movie }) => {
  const [show, setModal] = useState(false);
  return (
    <>
      <MenuItem
        className="button button--text movie-card__menu-item"
        onClick={() => setModal(!show)}
        onSelect={() => console.warn('onselect')}
      >
        Edit
      </MenuItem>
      <Dialog
        className="modal"
        isOpen={show}
        onDismiss={() => setModal(!show)}
        aria-label="edit movie modal window"
      >
        <ModalWindow isOpen={show} handleHide={() => setModal(!show)}>
          <Heading headingLevel={2} classList="h1">edit movie</Heading>
          <AddMovieForm hideModal={() => setModal(!show)} onSubmit={editMovie} {...movie} />
        </ModalWindow>
        <DialogOverlay className="modal__overlay" onDismiss={() => setModal(!show)} />
      </Dialog>
    </>
  );
};

EditMovieComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object.isRequired,
  editMovie: PropTypes.func.isRequired,
};

export default EditMovieComponent;
