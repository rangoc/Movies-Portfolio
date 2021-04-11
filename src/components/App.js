import React from 'react';
// Global Style
import GlobalStyle from 'components/GlobalStyle';
// Import Pages
import AboutUs from 'pages/AboutUs';
import Nav from 'components/Nav';
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AboutUs />;
    </>
  );
};

export default App;
