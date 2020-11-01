import React from 'react';

import GenreSelectorContainer from '../GenreSelector';
import MoviesSection from '../MoviesSection';
import SortSectionContainer from '../SortSection';
import DisplayPageStatus from '../DisplayPageStatus';

const Main = ({ isEmpty }) => (
  <main className="main">
    <div className="container">
      <div className="row center-xs between-xl">
        <div className="col-xs-12 col-md-10 col-lg-7 col-xl-8">
          <GenreSelectorContainer />
        </div>
        <div className="col-xs-12 col-md-12 col-lg-5 col-xl-4">
          <SortSectionContainer />
        </div>
      </div>
    </div>
    {isEmpty ? <DisplayPageStatus>Use search tool to get movies</DisplayPageStatus> : <MoviesSection />}
  </main>
);

export default Main;
