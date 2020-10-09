import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import MainPageHeader from '../MainPageHeader';
import DetailsPageHeaderContainer from '../DetailsPageHeader';
import HeaderSection from './HeaderSection';

const HeaderSectionContainer = () => {
  const { id } = useParams();
  return <HeaderSection>{id ? <DetailsPageHeaderContainer id={id} /> : <MainPageHeader />} </HeaderSection>;
};

export default HeaderSectionContainer;
