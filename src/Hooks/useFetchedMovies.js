import { useEffect, useState } from 'react';

const mockedMoviesData = [
  {
    id: '1',
    name: 'Pulp Fiction',
    genres: [
      'Drama', 'Crime',
    ],
    year: '1994',
    description: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.',
    duration: '154',
    rating: '9.3',
    url: 'google.com',
  },
  {
    id: '2',
    name: 'Bohemian Rhapsody',
    genres: [
      'Biography', 'Music',
    ],
    year: '2018',
    description: 'Queen, a British rock band, sets out to achieve musical superstardom. At the same time, lead singer Freddie Mercury faces personal struggles pertaining to his ego and sexuality.',
    duration: '124',
    rating: '8.1',
    url: 'google.com',
  },
  {
    id: '3',
    name: 'Kill Bill vol 2',
    genres: [
      'Drama', 'Crime',
    ],
    year: '2004',
    description: 'A pregnant woman, codenamed the Bride, sets out on a journey to kill her ex-boss, Bill, and targets his brother, Budd, and Elle Driver, the only two survivors of the Deadly Vipers Assassination Squad.',
    duration: '91',
    rating: '6.7',
    url: 'google.com',
  },
  {
    id: '4',
    name: 'Avengers: War of infinity',
    genres: [
      'Documentary', 'Comedy',
    ],
    year: '2017',
    description: 'The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.',
    duration: '211',
    rating: '8.3',
    url: 'google.com',
  },
  {
    id: '5',
    name: 'Inception',
    genres: [
      'Comedy', 'Drama',
    ],
    year: '2007',
    description: 'Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobbs criminal history as payment for performing an inception on his sick competitors son.',
    duration: '154',
    rating: '8.7',
    url: 'google.com',
  },
  {
    id: '6',
    name: 'Reservoir Dogs',
    genres: [
      'Drama', 'Crime',
    ],
    year: '1995',
    description: 'Six criminals, hired to steal diamonds, do not know each others true identity. While attempting the heist, the police ambushes them, leading them to believe that one of them is an undercover officer.',
    duration: '112',
    rating: '7.5',
    url: 'google.com',
  },
];

export default function useFetchedMovies() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // async logic here
    setData(mockedMoviesData);
  }, []);

  return [data, setData];
}
