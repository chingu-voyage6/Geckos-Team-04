import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage/Landing';
import ExplorePage from './Pages/Explore';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/explore" component={ExplorePage} />
      </Fragment>
    );
  }
}

export default App;
