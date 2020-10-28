import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Listbox, ListboxOption } from '@reach/listbox';
import { useRouter } from 'next/router';

import IconComponent from '../Base/IconComponent';

import './sort-section.scss';

const SortSection = ({ sortSectionData, setSortBy }) => {
  const [sortValue, setSortValue] = useState('title');
  const router = useRouter();
  const {
    query: { sortBy },
  } = router;

  useEffect(() => {
    if (sortBy) {
      setSortValue(sortBy);
      setSortBy(sortBy);
    }
  }, []);

  const changeSortHandler = (newSort) => {
    delete router.query.id;
    setSortValue(newSort);
    setSortBy(newSort);
    router.push({
      pathname: '/movies/search',
      query: { ...router.query, sortBy: newSort },
    });
  };

  return (
    <div className="container">
      <div className="row end-xs">
        <span className="sort-section__title">sort by</span>
        <Listbox
          defaultValue={'title'}
          value={sortValue}
          className="sort-section__dropdown margin-left-2"
          arrow={<IconComponent xlinkHref="#down-arrow" color="primary" />}
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
