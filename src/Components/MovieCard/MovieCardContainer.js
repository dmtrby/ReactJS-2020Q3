import { connect } from 'react-redux';

import MovieCard from './MovieCard';
import { setDetailsPage } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  openMovieDetails: (data) => dispatch(setDetailsPage(data)),
});

export default connect(null, mapDispatchToProps)(MovieCard);
