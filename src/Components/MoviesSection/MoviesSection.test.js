import React from 'react';
import MoviesSection from './MoviesSection';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { initialMoviesState } from '../../redux/reducers/movies';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

const mockedMoviesData = [
  {
    genres: ['Action', 'Adventure', 'Fantasy'],
    id: '1',
    overview: 'overviewText',
    poster_path: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    release_date: '2017-10-25',
    runtime: 130,
    title: 'Thor: Ragnarok',
  },
  {
    genres: ['Action', 'Horror', 'Fantasy'],
    id: '2',
    overview: 'overviewText',
    poster_path: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    release_date: '2017-10-25',
    runtime: 130,
    title: 'Aviator',
  },
  {
    genres: ['Action', 'Adventure'],
    id: '3',
    overview: 'overviewText',
    poster_path: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    release_date: '2017-10-25',
    runtime: 130,
    title: 'ScarFace',
  },
];

test('MoviesSection with movies should matches the Snapshot', () => {
  const store = mockStore(initialMoviesState);
  store.movies = mockedMoviesData;
  const mockedData = {
    isLoading: false,
    movies: mockedMoviesData,
  };
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <MoviesSection {...mockedData} />
      </Router>
    </Provider>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('MoviesSection in loading state should matches the Snapshot', () => {
  const store = mockStore(initialMoviesState);
  store.isLoading = true;
  const mockedData = {
    isLoading: true,
    movies: [],
  };
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <MoviesSection {...mockedData} />
      </Router>
    </Provider>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('MoviesSection in error state should matches the Snapshot', () => {
  const store = mockStore(initialMoviesState);
  store.error = {};
  const mockedData = {
    error: {},
    isLoading: false,
    movies: [],
  };
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <MoviesSection {...mockedData} />
      </Router>
    </Provider>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
