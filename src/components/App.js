import React from 'react';
// Global Style
import GlobalStyle from 'components/GlobalStyle';
// Import Pages
import AboutUs from 'pages/AboutUs';
import ContactUs from 'pages/ContactUs';
import OurWork from 'pages/OurWork';
import MovieDetail from 'pages/MovieDetail';
// Import components
import Nav from 'components/Nav';
// Router
import { Switch, Route, useLocation } from 'react-router-dom';
// Animation
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
