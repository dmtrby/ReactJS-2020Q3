const initialMoviesState = {
  movies: [],
  isLoading: false,
  error: null,
  isDetailsPage: false,
  detailsMovieData: null,
  filter: 'All',
  sort: 'title',
  needToUpdate: true,
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
        needToUpdate: false,
      };
    case 'ADD_MOVIE_SUCCESS':
      return {
        ...state,
        needToUpdate: true,
      };
    case 'DELETE_MOVIE_SUCCESS':
      return {
        ...state,
        needToUpdate: true,
      };
    case 'DELETE_MOVIE_FAILURE':
      return {
        ...state,
        needToUpdate: true,
      };
    case 'EDIT_MOVIE_SUCCESS':
      return {
        ...state,
        needToUpdate: true,
      };
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.filter,
      };
    case 'CHANGE_SORT':
      return {
        ...state,
        sort: action.sort,
      };
    case 'SET_MAIN_PAGE':
      return {
        ...state,
        isDetailsPage: false,
        detailsMovieData: null,
      };
    case 'SET_DETAILS_PAGE':
      return {
        ...state,
        isDetailsPage: true,
        detailsMovieData: state.movies.find((v) => v.id === action.id),
      };
    default:
      return state;
  }
};

export default movies;
