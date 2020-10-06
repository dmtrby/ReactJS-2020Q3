import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useLocation } from 'react-router-dom';

import HeaderSectionContainer from './Components/HeaderSection';
import FooterSection from './Components/FooterSection';
import Main from './Components/Main';

import './styles/_index.scss';
import './icons/icons-sprite.svg';

import Page404 from './Components/Page404';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HeaderSectionContainer />
          <Main isEmpty={true} />
          <FooterSection />
        </Route>
        <Route path="/film/:id">
          <HeaderSectionContainer />
          <Main  />
          <FooterSection />
        </Route>
        <Route path="/movies/search">
          <HeaderSectionContainer />
          <Main />
          <FooterSection />
        </Route>
        <Route path="/404">
          <Page404 />
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}
