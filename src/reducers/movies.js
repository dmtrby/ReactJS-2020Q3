const initialMoviesState = {
  movies: [],
  isLoading: false,
  error: null,
  isDetailsPage: false,
  detailsMovieData: null,
  filter: '',
  sortBy: '',
  search: '',
};

const movies = (state = initialMoviesState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_BEGIN':
      return {
        ...state,
        isLoading: true,
        error: null,
        movies: [],
      };
    case 'FETCH_MOVIES_SUCCESS':

      return {
        ...state,
        isLoading: false,
        movies: action.payload.movies,
      };
    case 'FETCH_MOVIE_BEGIN':
      return {
        ...state,
        detailedMovie: null,
        detailedMovieLoading: true,
      };
    case 'CHANGE_SORT':
      return {
        ...state,
        sortBy: action.value,
      };
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.value,
      };
    case 'CHANGE_SEARCH':
      return {
        ...state,
        search: action.value,
      };
    case 'FETCH_MOVIE_SUCCESS':
      return {
        ...state,
        detailedMovie: action.payload.movie,
        detailedMovieLoading: false,
      };
    case 'FETCH_MOVIE_404':
      return {
        ...state,
        detailedMovie: 404,
        detailedMovieLoading: false,
      };
    default:
      return state;
  }
};

export default movies;
