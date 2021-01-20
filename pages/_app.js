import React from 'react';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <style>{`
      html,body,#__next{
        margin:0;
        padding:0;
        font-size:16px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
      }
        a{
          text-decoration:none;
          color:inherit;
        }  
        `}</style>
    </>
  );
};

export default App;
