import { connect } from 'react-redux';

import HeaderSection from './HeaderSection';
import { setMainPage } from '../../actions';

const mapStateToProps = (state) => ({
  detailsMovieData: state.movies.detailsMovieData,
  isDetailsPage: state.movies.isDetailsPage,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchButtonClick: () => dispatch(setMainPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSection);
