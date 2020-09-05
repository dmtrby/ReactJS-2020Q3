import React, { useState } from 'react';

import HeaderSection from '../HeaderSection';
import MainSection from '../MainSection';

import useFetchedMovies from '../../Hooks/useFetchedMovies';

const WebApplication = () => {
  const [appStatus, setAppStatus] = useState({
    isDetailsPage: false,
    detailsMovieData: null,
  });

  const [moviesData, setMoviesData] = useFetchedMovies();

  const addMovie = (newMovieData) => {
    const newMoviesData = [...moviesData];
    const newMovie = { ...newMovieData };
    newMovie.rating = '9'; // remove it later
    newMovie.id = newMoviesData.length + 1;
    newMoviesData.push(newMovie);
    setMoviesData(newMoviesData);
  };

  const editMovie = (newMovieData) => {
    const newMovie = { ...newMovieData };
    const newMoviesData = [...moviesData];
    newMoviesData.forEach((v, i) => {
      if (v.id === newMovie.id) {
        newMovie.rating = newMoviesData[i].rating; // remove it later
        newMoviesData[i] = newMovie;
      }
    });
    setMoviesData(newMoviesData);
  };

  const removeMovie = (movie) => {
    const newArray = moviesData.filter((v) => v.id !== movie.id);
    setMoviesData(newArray);
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

  return (
    <>
      <HeaderSection
        {...appStatus}
        setMainPage={setMainPage}
        addMovie={addMovie}
      />
      {moviesData ? (
        <MainSection
          setDetailsPage={setDetailsPage}
          editMovie={editMovie}
          removeMovie={removeMovie}
          movies={moviesData}
        />
      ) : (
        'loading'
      )}

    </>
  );
};

export default WebApplication;
