import React from 'react';
import PropTypes from 'prop-types';
import {
  Listbox,
  ListboxOption,
} from '@reach/listbox';

import IconComponent from '../Base/IconComponent';

import './sort-section.scss';

const SortSection = ({ changeSortHandler, sort, sortSectionData }) => (
  <div className="container">
    <div className="row end-xs">
      <span className="sort-section__title">sort by</span>
      <Listbox
        defaultValue={sort}
        className="sort-section__dropdown margin-left-2"
        arrow={<IconComponent xlinkHref="#icons-sprite_down-arrow" color="primary" />}
        onChange={changeSortHandler}
      >
        {sortSectionData.map((item) => (
          <ListboxOption
            key={item.name}
            value={item.name}
          >
            {item.render}
          </ListboxOption>
        ))}
      </Listbox>
    </div>
  </div>
);

SortSection.propTypes = {
  sort: PropTypes.string.isRequired,
  changeSortHandler: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  sortSectionData: PropTypes.array.isRequired,
};

export default SortSection;
