import React from 'react';
import PropTypes from 'prop-types';

import {
  Listbox,
  ListboxOption,
} from '@reach/listbox';

import IconComponent from '../Base/IconComponent';
import './sort-section.scss';
import getRandomString from '../../Utils';

const mockedSortSectionData = [
  {
    name: 'name',
    render: 'Title',
  },
  {
    name: 'year',
    render: 'Release date',
  },
  {
    name: 'duration',
    render: 'Duration',
  },
  {
    name: 'rating',
    render: 'Rating',
  },
];

const SortSection = ({ sortBy, onSortChange }) => (
  <div className="container">
    <div className="row end-xs">
      <span className="sort-section__title">sort by</span>
      <Listbox
        defaultValue={sortBy}
        className="sort-section__dropdown margin-left-2"
        arrow={<IconComponent xlinkHref="#icons-sprite_down-arrow" color="primary" />}
        onChange={onSortChange}
      >
        {mockedSortSectionData.map((sort) => (
          <ListboxOption
            key={getRandomString()}
            value={sort.name}
          >
            {sort.render}
          </ListboxOption>
        ))}
      </Listbox>
    </div>
  </div>
);

SortSection.propTypes = {
  sortBy: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default SortSection;
