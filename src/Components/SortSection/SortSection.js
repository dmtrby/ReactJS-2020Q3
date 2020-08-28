import React from 'react';
import PropTypes from 'prop-types';

import {
  Listbox,
  ListboxOption,
} from '@reach/listbox';

import IconComponent from '../Base/IconComponent';
import './sort-section.scss';
import getRandomString from '../../Utils';

class SortSection extends React.Component {
  constructor(props) {
    super(props);
    const { sorts } = this.props;
    this.state = {
      sortArray: sorts,
      value: sorts[0],
    };
  }

  handleChange = (newValue) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { sortArray, value } = this.state;
    return (
      <div className="container">
        <div className="row end-xs">
          <span className="sort-section__title">sort by</span>
          <Listbox
            defaultValue={value.name}
            className="sort-section__dropdown margin-left-2"
            arrow={<IconComponent xlinkHref="#icons-sprite_down-arrow" color="primary" />}
            onChange={this.handleChange}
          >
            {sortArray.map((sort) => (
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
  }
}

SortSection.propTypes = {
  sorts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SortSection;
