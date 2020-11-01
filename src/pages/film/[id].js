import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../redux/actions';
import Head from 'next/head';

import HeaderSection from '../../Components/HeaderSection';
import FooterSection from '../../Components/FooterSection';
import DetailsPageHeader from '../../Components/DetailsPageHeader';
import Main from '../../Components/Main';

function MoviePage({ noFetch }) {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state);

  useEffect(() => {
    if (!noFetch) {
      const router = useRouter();
      const {
        query: { id },
      } = router;
      dispatch(fetchMovie(id));
    }
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Film page | Netflix roulette</title>
        <meta name="description" content="Film page with description" />
      </Head>
      <HeaderSection>
        <DetailsPageHeader />
      </HeaderSection>
      <Main isEmpty={!movies} />
      <FooterSection />
    </>
  );
}

MoviePage.getInitialProps = async ({ store, query, res }) => {
  const { id } = query;
  await store.dispatch(fetchMovie(id));
  const state = store.getState();
  const { detailedMovie } = state;
  if (detailedMovie === 404) {
    res.writeHead(301, {
      Location: '/404',
    });
    res.end();
  }

  return {
    noFetch: true,
  };
};

export default MoviePage;
