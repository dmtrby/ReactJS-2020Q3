import React from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogOverlay } from '@reach/dialog';
import Button from '../Base/Button';
import IconComponent from '../Base/IconComponent';
import './modal.scss';

const ModalWindow = ({ children, isOpen, handleHide }) => (
  <>
    <Dialog
      className="modal"
      isOpen={isOpen}
      onDismiss={handleHide}
      aria-label="modal window"
    >
      <div className="row end-xs">
        <Button variant="text" onClick={handleHide} classList="modal__close-button">
          <IconComponent xlinkHref="#icons-sprite_unchecked" color="light" />
        </Button>
      </div>
      <div className="modal__content">{children}</div>
      <DialogOverlay className="modal__overlay" onDismiss={handleHide} />
    </Dialog>
  </>

);

ModalWindow.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleHide: PropTypes.func.isRequired,
};

export default ModalWindow;
