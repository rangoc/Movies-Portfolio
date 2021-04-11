import React from 'react';
// Global Style
import GlobalStyle from 'components/GlobalStyle';
// Import Pages
import AboutUs from 'pages/AboutUs';
import ContactUs from 'pages/ContactUs';
import OurWork from 'pages/OurWork';
import Nav from 'components/Nav';
// Router
import { Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </>
  );
};

export default App;
