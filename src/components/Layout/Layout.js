import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Footer from './Footer/Footer';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header /> {children} <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
