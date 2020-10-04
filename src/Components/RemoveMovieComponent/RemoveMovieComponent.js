import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@reach/menu-button';

import Button from '../Base/Button';
import ModalWindow from '../ModalWIndow';
import Heading from '../Base/Heading';

const RemoveMovieComponent = ({ movie, deleteMovieHandler }) => {
  const [show, setModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteMovieHandler(movie.id);
    setModal(!show);
  };

  return (
    <>
      <MenuItem
        className="button button--text movie-card__menu-item"
        onClick={() => setModal(!show)}
        onSelect={() => console.warn('onselect')}
      >
        Remove
      </MenuItem>
      <ModalWindow isOpen={show} handleHide={() => setModal(!show)}>
        <Heading headingLevel={2} classList="h1">
          delete movie
        </Heading>
        <form onSubmit={handleSubmit} className="movie-form container">
          <div className="row">
            <div className="col-xs-12">Are you sure you want to delete this movie?</div>
            <div className="col-xs-12 margin-top-4">
              <div className="row end-xs">
                <Button
                  type="submit"
                  text="Confirm"
                  variant="primary"
                  classList="margin-left-lg-2 margin-top-lg-0 margin-top-xs-1"
                />
              </div>
            </div>
          </div>
        </form>
      </ModalWindow>
    </>
  );
};

RemoveMovieComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object.isRequired,
  deleteMovieHandler: PropTypes.func.isRequired,
};

export default RemoveMovieComponent;
