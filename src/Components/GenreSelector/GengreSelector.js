import React from 'react';

import './genre-selector.scss';
import Button from '../Base/Button';

const GenreSelector = () => (
  <nav className="genre-selector">
    <ul className="genre-selector__list">
      <li><Button classList="genre-selector__item genre-selector__active" variant="text" text="all" /></li>
      <li><Button classList="genre-selector__item genre-selector__active" variant="text" text="documentary" /></li>
      <li><Button classList="genre-selector__item genre-selector__active" variant="text" text="comedy" /></li>
      <li><Button classList="genre-selector__item genre-selector__active" variant="text" text="horror" /></li>
      <li><Button classList="genre-selector__item genre-selector__active" variant="text" text="crime" /></li>
    </ul>
  </nav>
);

export default GenreSelector;
