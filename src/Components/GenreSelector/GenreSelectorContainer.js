import { connect } from 'react-redux';
import GenreSelector from './GengreSelector';
import { setFilter, fetchMovies } from '../../redux/actions';

const genresData = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const mapDispatchToProps = (dispatch) => ({
  changeFilterHandler: (newFilter) => {
    dispatch(fetchMovies());
  },
  setFilterFunction: (newFilter) => {
    dispatch(setFilter(newFilter));
  }
});

const mapStateToProps = (state) => ({
  filter: state.movies.filter,
  genresData: genresData,
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreSelector);
