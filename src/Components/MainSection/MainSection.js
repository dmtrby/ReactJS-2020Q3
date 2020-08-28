import React from 'react';

import './main-section.scss';

import GenreSelector from '../GenreSelector';
import MoviesContainer from '../MoviesContainer';
import SortSection from '../SortSection';

const mockedMoviesData = [
  {
    id: '1',
    name: 'Pulp Fiction',
    genres: [
      'Drama', 'Biography', 'Music',
    ],
    year: '2004',
    image: 'pulp-fiction.png',
    description: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.',
    duration: '154',
    rating: '4.3',
  },
  {
    id: '2',
    name: 'Pulp Fiction',
    genres: [
      'Drama', 'Biography', 'Music',
    ],
    year: '2004',
    image: 'pulp-fiction.png',
    description: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.',
    duration: '154',
    rating: '4.3',
  },
  {
    id: '3',
    name: 'Pulp Fiction',
    genres: [
      'Drama', 'Biography', 'Music',
    ],
    year: '2004',
    image: 'pulp-fiction.png',
    description: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.',
    duration: '154',
    rating: '4.3',
  },
  {
    id: '4',
    name: 'Pulp Fiction',
    genres: [
      'Drama', 'Biography', 'Music',
    ],
    year: '2004',
    image: 'pulp-fiction.png',
    description: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.',
    duration: '154',
    rating: '4.3',
  },
  {
    id: '5',
    name: 'Pulp Fiction',
    genres: [
      'Drama', 'Biography', 'Music',
    ],
    year: '2004',
    image: 'pulp-fiction.png',
    description: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.',
    duration: '154',
    rating: '4.3',
  },
  {
    id: '6',
    name: 'Pulp Fiction',
    genres: [
      'Drama', 'Biography', 'Music',
    ],
    year: '2004',
    image: 'pulp-fiction.png',
    description: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.',
    duration: '154',
    rating: '4.3',
  },
];

const mockedSortSectionData = [
  {
    name: 'title',
    render: 'Title',
  },
  {
    name: 'release-date',
    render: 'Release date',
  },
  {
    name: 'Genre',
    render: 'genre',
  },
  {
    name: 'Overview',
    render: 'overview',
  },
];

const MainSection = () => (
  <main className="main">
    <div className="container">
      <div className="row center-xs between-xl">
        <div className="col-xs-12 col-md-10 col-lg-6 col-xl-5">
          <GenreSelector />
        </div>
        <div className="col-xs-12 col-md-12 col-lg-6 col-xl-5">
          <SortSection sorts={mockedSortSectionData} />
        </div>
      </div>
    </div>
    <MoviesContainer movies={mockedMoviesData} />
  </main>
);

export default MainSection;
