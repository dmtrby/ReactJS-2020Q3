import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';

import { setSearch } from '../../actions';
import { makeUrl } from '../../Utils';

import Logotype from '../Logotype';
import Input from '../Base/Input';
import Button from '../Base/Button';
import Heading from '../Base/Heading';
import AddMovieContainer from '../AddMovieComponent';

const MainPageHeader = ({ search, setSearchBy }) => {
  const [searchValue, setSearchValue] = useState(search);
  const history = useHistory();
  useEffect(() => {
    const values = queryString.parse(history.location.search);
    if (values.search) {
      setSearchBy(values.search);
      setSearchValue(values.search);
    }
  }, []);

  const handleChange = (newValue) => {
    setSearchValue(newValue);
    setSearchBy(newValue);
    const queryValues = queryString.parse(history.location.search);
    const url = makeUrl(queryValues, 'search', newValue);
    history.push('/movies/search' + url);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryValues = queryString.parse(history.location.search);
    const url = makeUrl(queryValues, 'search', searchValue);
    setSearchBy(searchValue);
    history.push('/movies/search' + url);
  };

  return (
    <>
      <div className="container margin-bottom-2">
        <div className="header__logo-section row between-xs middle-xs padding-top-2">
          <span className="header__logo">
            <Logotype />
          </span>
          <AddMovieContainer />
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
                    onChange={(e) => handleChange(e.target.value)}
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

const mapDispatchToProps = (dispatch) => ({
  setSearchBy: (newSearchBy) => {
    dispatch(setSearch(newSearchBy));
  },
});

const mapStateToProps = (state) => ({
  search: state.movies.search,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageHeader);
