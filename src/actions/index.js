const BASE_URL = 'http://localhost:4000/movies?limit=39';

const SET_MAIN_PAGE = 'SET_MAIN_PAGE';
const SET_DETAILS_PAGE = 'SET_DETAILS_PAGE';

const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

const ADD_MOVIE_BEGIN = 'ADD_MOVIE_BEGIN';
const ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS';
const ADD_MOVIE_FAILURE = 'ADD_MOVIE_FAILURE';

const DELETE_MOVIE_BEGIN = 'DELETE_MOVIE_BEGIN';
const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
const DELETE_MOVIE_FAILURE = 'DELETE_MOVIE_FAILURE';

const EDIT_MOVIE_BEGIN = 'ADD_MOVIE_BEGIN';
const EDIT_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS';
const EDIT_MOVIE_FAILURE = 'ADD_MOVIE_FAILURE';

const CHANGE_FILTER = 'CHANGE_FILTER';
const CHANGE_SORT = 'CHANGE_SORT';

const changeFilter = (newFilter) => ({
  type: CHANGE_FILTER,
  filter: newFilter,
});

const changeSort = (newSort) => ({
  type: CHANGE_SORT,
  sort: newSort,
});

const setMainPage = () => ({
  type: SET_MAIN_PAGE,
});

const setDetailsPage = (id) => ({
  type: SET_DETAILS_PAGE,
  id,
});

const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN,
});

const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies },
});

const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error },
});

// edit movie

const editMovieBegin = () => ({
  type: EDIT_MOVIE_BEGIN,
});

const editMovieSuccess = (movie) => ({
  type: EDIT_MOVIE_SUCCESS,
  payload: { movie },
});

const editMovieFailure = (error) => ({
  type: EDIT_MOVIE_FAILURE,
  payload: { error },
});

const fetchEditMovie = (data) =>
  fetch('http://localhost:4000/movies', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(
    (response) => response.json(),
    (reject) => reject.json(),
  );

const editMovie = (data) => (dispatch) => {
  const sendData = {
    id: data.id,
    title: data.name || 'ABC name',
    genres: data.genres || ['drama'],
    release_date: '2016-12-29',
    poster_path: 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
    overview: data.description || 'test overview',
    runtime: 128,
    vote_average: 7.9,
  };
  dispatch(editMovieBegin());
  return fetchEditMovie(sendData).then(
    (response) => dispatch(editMovieSuccess(response)),
    (error) => dispatch(editMovieFailure(error)),
  );
};

// delete movie
const deleteMovieBegin = () => ({
  type: DELETE_MOVIE_BEGIN,
});

const deleteMovieSuccess = (movies) => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: { movies },
});

const deleteMovieFailure = (error) => ({
  type: DELETE_MOVIE_FAILURE,
  payload: { error },
});

const fetchDeleteMovie = (id) =>
  fetch(`http://localhost:4000/movies/${id}`, {
    method: 'DELETE',
  }).then(
    (response) => response.json(),
    (reject) => reject.json(),
  );

const deleteMovie = (id) => (dispatch) => {
  dispatch(deleteMovieBegin());
  return fetchDeleteMovie(id).then(
    (response) => dispatch(deleteMovieSuccess(response)),
    (error) => dispatch(deleteMovieFailure(error)),
  );
};

// add movie

const addMovieBegin = () => ({
  type: ADD_MOVIE_BEGIN,
});

const addMovieSuccess = (movie) => ({
  type: ADD_MOVIE_SUCCESS,
  payload: { movie },
});

const addMovieFailure = (error) => ({
  type: ADD_MOVIE_FAILURE,
  payload: { error },
});

const fetchAddMovie = (data) => {
  const sendData = {
    title: data.name || 'test name',
    genres: data.genres || ['drama'],
    release_date: '2016-12-29',
    poster_path: 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
    overview: data.description || 'test overview',
    runtime: 128,
    vote_average: 7.9,
  };
  return fetch('http://localhost:4000/movies', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendData),
  }).then(
    (response) => response.json(),
    (reject) => reject.json(),
  );
};

const addMovie = (data) => (dispatch) => {
  dispatch(addMovieBegin());
  return fetchAddMovie(data).then(
    (response) => dispatch(addMovieSuccess(response)),
    (error) => dispatch(addMovieFailure(error)),
  );
};

// get movie

const setUrlParams = ({ movies }) => {
  const { filter, sort } = movies;
  let url = BASE_URL;
  if (filter !== 'All') {
    url += `&filter=${filter}`;
  }
  if (sort) {
    url += `&sortBy=${sort}`;
    url += '&sortOrder=asc';
  }
  return url;
};

const getMovies = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((moviesData) => moviesData.data);

const fetchMovies = () => (dispatch, getState) => {
  const state = getState();
  const url = setUrlParams(state);

  dispatch(fetchMoviesBegin());
  return getMovies(url).then(
    (data) => dispatch(fetchMoviesSuccess(data)),
    (error) => dispatch(fetchMoviesFailure(error)),
  );
};

export { setMainPage, setDetailsPage, fetchMovies, addMovie, changeFilter, changeSort, deleteMovie, editMovie };
