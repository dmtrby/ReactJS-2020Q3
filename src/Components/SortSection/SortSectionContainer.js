import { connect } from 'react-redux';
import SortSection from './SortSection';
import { fetchMovies, setSort } from '../../redux/actions';

const mockedSortSectionData = [
  {
    name: 'title',
    render: 'Title',
  },
  {
    name: 'release_date',
    render: 'Release date',
  },
  {
    name: 'runtime',
    render: 'Duration',
  },
  {
    name: 'vote_average',
    render: 'Rating',
  },
];

const mapDispatchToProps = (dispatch) => ({
  changeSortHandler: (newSort) => {
    dispatch(fetchMovies());
  },
  setSortBy: (newSort) => {
    dispatch(setSort(newSort));
  }
});

const mapStateToProps = (state) => ({
  sort: state.movies.sort,
  sortSectionData: mockedSortSectionData,
});

export default connect(mapStateToProps, mapDispatchToProps)(SortSection);
