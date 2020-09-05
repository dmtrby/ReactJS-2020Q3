import React from 'react';

import './styles/_index.scss';
import './icons/icons-sprite.svg';

import WebApplication from './Components/WebApplication';
import FooterSection from './Components/FooterSection';

export default function App() {
  return (
    <>
      <WebApplication />
      <FooterSection />
    </>
  );
}
