import { connect } from 'react-redux';
import RemoveMovieComponent from './RemoveMovieComponent';
import { deleteMovie } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  deleteMovieHandler: (id) => {
    dispatch(deleteMovie(id));
  },
});

export default connect(null, mapDispatchToProps)(RemoveMovieComponent);
