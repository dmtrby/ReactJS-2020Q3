import React from 'react';
import App from 'next/app'

// import '../styles/_abstracts.scss';
// import '../styles/_index.scss';

import { wrapper } from '../redux/store';

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

WrappedApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext) || {};

  return { ...appProps };
};

export default wrapper.withRedux(WrappedApp);
