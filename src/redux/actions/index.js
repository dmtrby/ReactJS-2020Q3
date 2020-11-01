const BASE_URL = 'http://localhost:4000/movies?limit=39';

const FETCH_MOVIE_BEGIN = 'FETCH_MOVIE_BEGIN';
const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';
const FETCH_MOVIE_404 = 'FETCH_MOVIE_404';

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
const CHANGE_SEARCH = 'CHANGE_SEARCH';

const setFilter = (value) => ({
  type: CHANGE_FILTER,
  value: value,
});

const setSort = (value) => ({
  type: CHANGE_SORT,
  value: value,
});

const setSearch = (value) => ({
  type: CHANGE_SEARCH,
  value: value,
});

const fetchMovieBegin = () => ({
  type: FETCH_MOVIE_BEGIN,
});

const fetchMovie404 = () => ({
  type: FETCH_MOVIE_404,
});

const fetchMovieSuccess = (movie) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: { movie },
});

const fetchMovieFailure = (error) => ({
  type: FETCH_MOVIE_FAILURE,
  payload: { error },
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

const editMovieSuccess = () => ({
  type: EDIT_MOVIE_SUCCESS,
});

const editMovieFailure = (error) => ({
  type: EDIT_MOVIE_FAILURE,
  payload: { error },
});

// delete movie
const deleteMovieBegin = () => ({
  type: DELETE_MOVIE_BEGIN,
});

const deleteMovieSuccess = () => ({
  type: DELETE_MOVIE_SUCCESS,
});

const deleteMovieFailure = (error) => ({
  type: DELETE_MOVIE_FAILURE,
  payload: { error },
});

// add movie

const addMovieBegin = () => ({
  type: ADD_MOVIE_BEGIN,
});

const addMovieSuccess = () => ({
  type: ADD_MOVIE_SUCCESS,
});

const addMovieFailure = (error) => ({
  type: ADD_MOVIE_FAILURE,
  payload: { error },
});

const setUrlParams = (data) => {
  const [filter, sortBy, search] = data;

  let url = BASE_URL;
  if (filter && filter !== 'All') {
    url += `&filter=${filter}`;
  }
  if (sortBy) {
    url += `&sortBy=${sortBy}`;
    url += '&sortOrder=asc';
  }
  if (search) {
    url += `&search=${search}`;
    url += `&searchBy=title`;
  }
  return url;
};

// ACTION CREATORS START

const fetchMovies = (...data) => (dispatch) => {
  const url = setUrlParams(data);

  dispatch(fetchMoviesBegin());
  return fetch(url)
    .then((res) => res.json())
    .then((data) => dispatch(fetchMoviesSuccess(data.data)))
    .catch((error) => dispatch(fetchMoviesFailure(error)));
};

const addMovie = (data) => (dispatch) => {
  dispatch(addMovieBegin());
  return fetch('http://localhost:4000/movies', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(
    (response) => dispatch(addMovieSuccess()),
    (error) => dispatch(addMovieFailure(error)),
  );
};

const editMovie = (data) => (dispatch) => {
  dispatch(editMovieBegin());
  return fetch('http://localhost:4000/movies', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(
    (response) => dispatch(editMovieSuccess()),
    (error) => dispatch(editMovieFailure(error)),
  );
};

const deleteMovie = (id) => (dispatch) => {
  dispatch(deleteMovieBegin());
  return fetch(`http://localhost:4000/movies/${id}`, {
    method: 'DELETE',
  }).then(
    (response) => dispatch(deleteMovieSuccess()),
    (error) => dispatch(deleteMovieFailure(error)),
  );
};

const fetchMovie = (id) => (dispatch) => {
  dispatch(fetchMovieBegin());

  return fetch(`http://localhost:4000/movies/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('404');
      }
    })
    .then((data) => dispatch(fetchMovieSuccess(data)))
    .catch((error) => dispatch(fetchMovie404()));
};
// ACTION CREATORS END

export { setSort, setFilter, setSearch, fetchMovie, fetchMovies, addMovie, deleteMovie, editMovie };
