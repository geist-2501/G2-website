import React from 'react';
import '../shared/styles/app.global.scss';
import '../shared/styles/app.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
