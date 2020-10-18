import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Listbox, ListboxOption } from '@reach/listbox';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { makeUrl } from '../../Utils';

import IconComponent from '../Base/IconComponent';

import './sort-section.scss';

const SortSection = ({ sortSectionData, setSortBy }) => {
  const [sortValue, setSortValue] = useState('title');
  const history = useHistory();

  useEffect(() => {
    const values = queryString.parse(history.location.search);
    if (values.sortBy) {
      setSortValue(values.sortBy);
      setSortBy(values.sortBy);
    }
  }, []);

  const changeSortHandler = (newSort) => {
    const queryValues = queryString.parse(history.location.search);
    setSortValue(newSort);
    setSortBy(newSort);
    const { pathname } = history.location;
    const url = makeUrl(queryValues, 'sortBy', newSort);
    history.push(pathname + url);
  }

  return (
    <div className="container">
      <div className="row end-xs">
        <span className="sort-section__title">sort by</span>
        <Listbox
          defaultValue={'title'}
          value={sortValue}
          className="sort-section__dropdown margin-left-2"
          arrow={<IconComponent xlinkHref="#icons-sprite_down-arrow" color="primary" />}
          onChange={changeSortHandler}
        >
          {sortSectionData.map((item) => (
            <ListboxOption key={item.name} value={item.name}>
              {item.render}
            </ListboxOption>
          ))}
        </Listbox>
      </div>
    </div>
  );
};

SortSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  sortSectionData: PropTypes.array.isRequired,
};

export default SortSection;
