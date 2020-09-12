import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Logotype from '../Logotype';
import Input from '../Base/Input';
import Button from '../Base/Button';
import Heading from '../Base/Heading';
import AddMovieComponent from '../AddMovieComponent';

const MainPageHeader = ({ searchMovies, ...otherProps }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(searchValue);
  };

  return (
    <>
      <div className="container margin-bottom-2">
        <div className="header__logo-section row between-xs middle-xs padding-top-2">
          <span className="header__logo">
            <Logotype />
          </span>
          <AddMovieComponent {...otherProps} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-10 col-lg-offset-1">
            <div className="container margin-bottom-10">
              <div className="row flex-column">
                <div className="col-xs">
                  <Heading headingLevel={1}>find your movie</Heading>
                </div>
                <form className="col-xs search-form margin" onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    classList="search-form__input"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    id="search"
                    name="search"
                    placeHolder="What do you want to watch?"
                  />
                  <Button
                    type="submit"
                    text="search"
                    variant="primary"
                    classList="margin-left-lg-2 margin-top-lg-0 margin-top-xs-1"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MainPageHeader.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default MainPageHeader;
