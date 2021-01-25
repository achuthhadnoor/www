import React from 'react';
import Layout from '../Layout';

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  );
};

export default App;
