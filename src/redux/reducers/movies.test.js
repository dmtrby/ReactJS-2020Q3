import { movies, initialMoviesState } from './movies';

describe('movies reducer', () => {
  it('should return initial state', () => {
    expect(movies(undefined, {})).toEqual(initialMoviesState);
  });

  it('should handle FETCH_MOVIES_BEGIN', () => {
    expect(
      movies(
        {},
        {
          type: 'FETCH_MOVIES_BEGIN',
        },
      ),
    ).toEqual({
      isLoading: true,
      error: null,
      movies: [],
    });
  });

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    expect(
      movies(
        {},
        {
          type: 'FETCH_MOVIES_SUCCESS',
          payload: {
            movies: 'moviesData',
          },
        },
      ),
    ).toEqual({
      isLoading: false,
      movies: 'moviesData',
    });
  });

  it('should handle FETCH_MOVIES_BEGIN', () => {
    expect(
      movies(
        {},
        {
          type: 'FETCH_MOVIES_BEGIN',
        },
      ),
    ).toEqual({
      isLoading: true,
      error: null,
      movies: [],
    });
  });

  it('should handle CHANGE_SORT', () => {
    expect(
      movies(
        {},
        {
          type: 'CHANGE_SORT',
          value: 'new sort',
        },
      ),
    ).toEqual({
      sortBy: 'new sort',
    });
  });

  it('should handle CHANGE_FILTER', () => {
    expect(
      movies(
        {},
        {
          type: 'CHANGE_FILTER',
          value: 'new filter',
        },
      ),
    ).toEqual({
      filter: 'new filter',
    });
  });

  it('should handle CHANGE_SEARCH', () => {
    expect(
      movies(
        {},
        {
          type: 'CHANGE_SEARCH',
          value: 'new search',
        },
      ),
    ).toEqual({
      search: 'new search',
    });
  });

  it('should handle FETCH_MOVIE_SUCCESS', () => {
    expect(
      movies(
        {},
        {
          type: 'FETCH_MOVIE_SUCCESS',
          payload: {
            movie: 'movieData',
          },
        },
      ),
    ).toEqual({
      detailedMovie: 'movieData',
      detailedMovieLoading: false,
    });
  });

  it('should handle FETCH_MOVIE_404', () => {
    expect(
      movies(
        {},
        {
          type: 'FETCH_MOVIE_404',
        },
      ),
    ).toEqual({
      detailedMovie: 404,
      detailedMovieLoading: false,
    });
  });
});
