import React, { useState, useMemo } from 'react';

import HeaderSection from '../HeaderSection';
import MainSection from '../MainSection';
import useFetchedMovies from '../../Hooks/useFetchedMovies';

const WebApplication = () => {
  const [appStatus, setAppStatus] = useState({
    isDetailsPage: false,
    detailsMovieData: null,
  });

  const [moviesData, setMoviesData] = useFetchedMovies();

  const [filterString, setFilterString] = useState('');

  const searchMovies = (stringValue) => {
    setFilterString(stringValue);
    // setFilteredMoviesData([
    //   ...filteredMoviesData.filter((v) => v.name.toLowerCase().includes(stringValue.toLowerCase())),
    // ]);
  };

  const addMovie = (newMovie) => {
    moviesData.push({ ...newMovie, id: moviesData.length + 1, rating: '9' }); // remove rating later ( and id maybe)
    setMoviesData([...moviesData]);
  };

  const editMovie = (newMovieData) => {
    moviesData.forEach((v, i) => {
      if (v.id === newMovieData.id) {
        moviesData[i] = { ...newMovieData, rating: moviesData[i].rating };
      }
    });
    setMoviesData([...moviesData]);
  };

  const removeMovie = (movie) => {
    setMoviesData([...moviesData.filter((v) => v.id !== movie.id)]);
  };

  const setDetailsPage = (data) => {
    setAppStatus({
      ...appStatus,
      isDetailsPage: true,
      detailsMovieData: data,
    });
  };

  const setMainPage = () => {
    setAppStatus({
      ...appStatus,
      isDetailsPage: false,
      detailsMovieData: null,
    });
  };

  const filteredData = useMemo(
    () => (moviesData ? moviesData.filter((v) => v.name.toLowerCase().includes(filterString.toLowerCase())) : null),
    [filterString, moviesData],
  );

  return (
    <>
      <HeaderSection {...appStatus} setMainPage={setMainPage} addMovie={addMovie} searchMovies={searchMovies} />
      {filteredData ? (
        <MainSection
          setDetailsPage={setDetailsPage}
          editMovie={editMovie}
          removeMovie={removeMovie}
          movies={filteredData}
        />
      ) : (
        'loading'
      )}
    </>
  );
};

export default WebApplication;
