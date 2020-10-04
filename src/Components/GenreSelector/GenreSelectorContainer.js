import { connect } from 'react-redux';
import GenreSelector from './GengreSelector';
import { changeFilter, fetchMovies } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  changeFilterHandler: (newFilter) => {
    dispatch(changeFilter(newFilter));
    dispatch(fetchMovies());
  },
});

const mapStateToProps = (state) => ({
  filter: state.movies.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreSelector);
