import React from 'react';
import Head from 'next/head';

import Page404 from '../Components/Page404';

// import sprite from './icons/icons-sprite.svg';

function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 | Netflix roulette</title>
        <meta name="description" content="Page not found" />
      </Head>
      <Page404 />
    </>
  );
}

export default NotFoundPage;
