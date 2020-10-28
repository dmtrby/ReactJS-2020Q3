import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/actions';
import Head from 'next/head';

import MainPageHeader from '../../Components/MainPageHeader';
import HeaderSection from '../../Components/HeaderSection';
import FooterSection from '../../Components/FooterSection';
import Main from '../../Components/Main';

// import sprite from './icons/icons-sprite.svg';

function MoviesPage({ noFetch }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!noFetch) {
      const router = useRouter();
      const {
        query: { filter, sortBy, search },
      } = router;
      dispatch(fetchMovies(filter, sortBy, search));
    }
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Movies gallery | Netflix roulette</title>
        <meta name="description" content="Movies gallery page" />
      </Head>
      <HeaderSection>
        <MainPageHeader></MainPageHeader>
      </HeaderSection>
      <Main isEmpty={false} />
      <FooterSection />
    </>
  );
}

MoviesPage.getInitialProps = async ({ store, query }) => {
  const { filter, sortBy, search } = query;
  await store.dispatch(fetchMovies(filter, sortBy, search));
  return {
    noFetch: true,
  };
};

export default MoviesPage;
