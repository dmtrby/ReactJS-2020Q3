import { connect } from 'react-redux';

import EditMovieComponent from './EditMovieComponent';
import { editMovie } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  editMovieHandler: (data) => {
    dispatch(editMovie(data));
  },
});

export default connect(null, mapDispatchToProps)(EditMovieComponent);
