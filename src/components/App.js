import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Landing from './Pages/Landing';
import Explore from './Pages/Explore';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Landing} />
        <Route exact path="/explore" component={Explore} />
      </Layout>
    );
  }
}

export default App;
