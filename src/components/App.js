import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage/Landing';
import ExplorePage from './Pages/Explore';
import PrivacyPage from './Pages/Privacy';
import TermsPage from './Pages/Terms';
import LoginPage from './Pages/Login';
import ChooseAccountPage from './Pages/ChooseAccount';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/privacy" component={PrivacyPage} />
        <Route exact path="/terms" component={TermsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/choose-account" component={ChooseAccountPage} />
      </Fragment>
    );
  }
}

export default App;
