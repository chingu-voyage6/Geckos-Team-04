import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage/Landing';
import ExplorePage from './Pages/ExplorePage/Explore';
import PrivacyPage from './Pages/Privacy';
import TermsPage from './Pages/Terms';
import LoginPage from './Pages/Login';
import MoreServicesPage from './Pages/MoreServicesPage/MoreServices';
import CustomerProfile from './Pages/Customer/Profile';
import AccountSettings from './Pages/Customer/Information';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/privacy" component={PrivacyPage} />
        <Route exact path="/terms" component={TermsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/more-services" component={MoreServicesPage} />
        <Route exact path="/customer/profile" component={CustomerProfile} />
        <Route exact path="/profile/information" component={AccountSettings} />
      </Fragment>
    );
  }
}

export default App;
