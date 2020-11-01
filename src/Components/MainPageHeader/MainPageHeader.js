import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { setSearch } from '../../redux/actions';

import Logotype from '../Logotype';
import Input from '../Base/Input';
import Button from '../Base/Button';
import Heading from '../Base/Heading';
import AddMovieContainer from '../AddMovieComponent';

const MainPageHeader = () => {
  const dispatch = useDispatch();
  const { search: searchFromStore } = useSelector((state) => state);

  const [searchValue, setSearchValue] = useState(searchFromStore);
  const router = useRouter();
  const {
    query: { search },
  } = router;
  useEffect(() => {
    if (search) {
      dispatch(setSearch(search));
      setSearchValue(search);
    } else {
      dispatch(setSearch(''));
      setSearchValue('');
    }
  }, []);

  const redirect = (value) => {
    if (value) {
      router.push({
        pathname: '/movies/search',
        query: { ...router.query, search: value },
      });
    } else {
      const { search, ...queryToSet } = router.query;
      router.push({
        pathname: '/movies/search',
        query: { ...queryToSet },
      });
    }
  };

  const handleChange = (newValue) => {
    setSearchValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(searchValue));
    redirect(searchValue);
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

export default MainPageHeader;
