import React from 'react';
import { useSelector } from 'react-redux';

import DetailsPageHeader from './DetailsPageHeader';
import DisplayPageStatus from '../DisplayPageStatus';



const DetailsPageHeaderContainer = () => {
  const { detailedMovie, detailedMovieLoading } = useSelector((state) => state);

  if ((detailedMovieLoading && !detailedMovie) || !detailedMovie) {
    return <DisplayPageStatus>Loading...</DisplayPageStatus>;
  } else {
    return <DetailsPageHeader {...detailedMovie} />;
  }
};

export default DetailsPageHeaderContainer;
