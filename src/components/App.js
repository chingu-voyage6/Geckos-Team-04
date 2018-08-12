import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

import LandingPage from './Pages/LandingPage/Landing';
import ExplorePage from './Pages/ExplorePage/Explore';
import MessagePage from './Pages/MessagePage';
import PrivacyPage from './Pages/Policy/Privacy';
import TermsPage from './Pages/Policy/Terms';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import ChooseAccountPage from './Pages/ChooseAccount';
import MoreServicesPage from './Pages/MoreServicesPage/MoreServices';
import CustomerProfile from './Pages/Customer/Profile';
import EditProfile from './Pages/Customer/EditProfile';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import ServiceNearMe from './Pages/ServiceNearMePage/ServiceNearMe';
import AccountSettings from './Pages/Customer/Information';
import Logout from './Pages/Logout';
import ServiceNotFound from './Pages/ServiceNotFound';

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
        <Route path="/home-improvement" component={CategoryPage} />
        <Route path="/wellness" component={CategoryPage} />
        <Route path="/lessons" component={CategoryPage} />
        <Route path="/weddings" component={CategoryPage} />
        <Route path="/events" component={CategoryPage} />
        <Route path="/service-not-found" component={ServiceNotFound} />
        <Route path="/:service/near-me" component={ServiceNearMe} />

        <PrivateRoute path="/customer/inbox" component={MessagePage} />
        <PrivateRoute path="/customer/profile" component={CustomerProfile} />
        <PrivateRoute path="/profile/information" component={AccountSettings} />
        <PrivateRoute path="/profile/account_edit" component={EditProfile} />
        <PrivateRoute exact path="/logout" component={Logout} />
      </Fragment>
    );
  }
}

export default App;
