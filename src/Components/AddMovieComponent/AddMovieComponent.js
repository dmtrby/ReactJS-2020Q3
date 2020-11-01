import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Base/Button';
import IconComponent from '../Base/IconComponent';
import ModalWindow from '../ModalWIndow';
import Heading from '../Base/Heading';
import AddMovieForm from '../AddMovieForm';

const AddMovieComponent = ({ addMovieRequest }) => {
  const [show, setModal] = useState(false);
  return (
    <>
      <Button variant="with-icon" onClick={() => setModal(!show)}>
        <IconComponent xlinkHref="#plus" size="small" color="primary" classList="margin-right-1" />
        add movie
      </Button>
      <ModalWindow isOpen={show} handleHide={() => setModal(!show)}>
        <Heading headingLevel={2} classList="h1">
          add movie
        </Heading>
        <AddMovieForm hideModal={() => setModal(!show)} onSubmit={addMovieRequest} />
      </ModalWindow>
    </>
  );
};

AddMovieComponent.propTypes = {
  addMovieRequest: PropTypes.func.isRequired,
};

export default AddMovieComponent;
