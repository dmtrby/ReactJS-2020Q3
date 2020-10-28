import { connect } from 'react-redux';

import AddMovieComponent from './AddMovieComponent';
import { addMovie } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  addMovieRequest: (data) => dispatch(addMovie(data)),
});

export default connect(null, mapDispatchToProps)(AddMovieComponent);
