import React from 'react';
import Head from 'next/head';

import MainPageHeader from '../Components/MainPageHeader';
import HeaderSection from '../Components/HeaderSection';
import FooterSection from '../Components/FooterSection';
import Main from '../Components/Main';

// import sprite from './icons/icons-sprite.svg';

function HomePage() {
  return (
    <>
      <Head>
        <title>Main page | Netflix roulette</title>
        <meta name="description" content="Find your movie" />
      </Head>
      <HeaderSection>
        <MainPageHeader></MainPageHeader>
      </HeaderSection>
      <Main isEmpty={true} />
      <FooterSection />
    </>
  );
}

export default HomePage;
