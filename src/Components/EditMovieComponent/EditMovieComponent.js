import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@reach/menu-button';

import ModalWindow from '../ModalWIndow';
import Heading from '../Base/Heading';
import AddMovieForm from '../AddMovieForm';

const EditMovieComponent = ({ editMovieHandler, movie }) => {
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
      <ModalWindow isOpen={show} handleHide={() => setModal(!show)}>
        <Heading headingLevel={2} classList="h1">
          edit movie
        </Heading>
        <AddMovieForm hideModal={() => setModal(!show)} onSubmit={editMovieHandler} {...movie} />
      </ModalWindow>
    </>
  );
};

EditMovieComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object.isRequired,
  editMovieHandler: PropTypes.func.isRequired,
};

export default EditMovieComponent;
