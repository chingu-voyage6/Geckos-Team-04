import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import LandingPage from './Pages/LandingPage/Landing';
import ExplorePage from './Pages/ExplorePage/Explore';
import PrivacyPage from './Pages/Policy/Privacy';
import TermsPage from './Pages/Policy/Terms';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import ChooseAccountPage from './Pages/ChooseAccount';
import MoreServicesPage from './Pages/MoreServicesPage/MoreServices';
import CustomerProfile from './Pages/Customer/Profile';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ServiceNearMe from './Pages/ServiceNearMePage/ServiceNearMe';
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
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/choose-account" component={ChooseAccountPage} />
        <Route path="/more-services" component={MoreServicesPage} />
        <PrivateRoute path="/customer/profile" component={CustomerProfile} />
        <PrivateRoute path="/profile/information" component={AccountSettings} />
        <Route path="/home-improvement" component={CategoryPage} />
        <Route path="/wellness" component={CategoryPage} />
        <Route path="/events" component={CategoryPage} />
        <Route path="/:service/near-me" component={ServiceNearMe} />
      </Fragment>
    );
  }
}

export default App;
