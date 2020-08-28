import React from 'react';

import './styles/_index.scss';
import './icons/icons-sprite.svg';

import HeaderSection from './Components/HeaderSection';
import MainSection from './Components/MainSection';
import FooterSection from './Components/FooterSection';

export default function App() {
  return (
    <>
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </>
  );
}
