import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import fetchMock from 'fetch-mock';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('async actions', () => {
  const store = mockStore({});
  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  it('creates FETCH_MOVIES_BEGIN and FETCH_MOVIES_SUCCESS with movies data when fetching movies has been done', () => {
    const url =
      'http://localhost:4000/movies?limit=39&filter=horror&sortBy=title&sortOrder=asc&search=g&searchBy=title';
    fetchMock.getOnce(url, {
      body: { data: 'moviesData' },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: 'FETCH_MOVIES_BEGIN' },
      { type: 'FETCH_MOVIES_SUCCESS', payload: { movies: 'moviesData' } },
    ];

    return store.dispatch(actions.fetchMovies('horror', 'title', 'g')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_MOVIE_BEGIN and FETCH_MOVIE_SUCCESS with movie data when fetching movie has been done', () => {
    const url = 'http://localhost:4000/movies/1000';
    fetchMock.getOnce(url, {
      body: { data: 'movieData' },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: 'FETCH_MOVIE_BEGIN' },
      { type: 'FETCH_MOVIE_SUCCESS', payload: { movie: { data: 'movieData' } } },
    ];

    return store.dispatch(actions.fetchMovie(1000)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_MOVIE_404 if there is no movie with such id or fetch fails', () => {
    const url = 'http://localhost:4000/movies/999999999';
    fetchMock.getOnce(url, {
      status: 404,
    });

    const expectedActions = [{ type: 'FETCH_MOVIE_BEGIN' }, { type: 'FETCH_MOVIE_404' }];

    return store.dispatch(actions.fetchMovie(999999999)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates DELETE_MOVIE_BEGIN and DELETE_MOVIE_SUCCESS after removing the movie', () => {
    const url = 'http://localhost:4000/movies/1001';
    fetchMock.deleteOnce(url, {
      body: { movies: 'movieData' },
    });

    const expectedActions = [{ type: 'DELETE_MOVIE_BEGIN' }, { type: 'DELETE_MOVIE_SUCCESS' }];

    return store.dispatch(actions.deleteMovie(1001)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates EDIT_MOVIE_BEGIN and EDIT_MOVIE_SUCCESS after editing the movie', () => {
    const url = 'http://localhost:4000/movies';
    fetchMock.once(url, { headers: { 'content-type': 'application/json' } });

    const expectedActions = [{ type: 'ADD_MOVIE_BEGIN' }, { type: 'ADD_MOVIE_SUCCESS' }];

    return store.dispatch(actions.editMovie({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates ADD_MOVIE_BEGIN and ADD_MOVIE_SUCCESS after adding the movie', () => {
    const url = 'http://localhost:4000/movies';
    fetchMock.once(url, { headers: { 'content-type': 'application/json' } });

    const expectedActions = [{ type: 'ADD_MOVIE_BEGIN' }, { type: 'ADD_MOVIE_SUCCESS' }];

    return store.dispatch(actions.addMovie({})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
