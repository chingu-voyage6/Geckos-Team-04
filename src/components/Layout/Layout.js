import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Footer from './Footer/Footer';

class Layout extends Component {
  render() {
    const { children, isSearchPresent, isFooterFull } = this.props;
    return (
      <div>
        <Header isSearchPresent={isSearchPresent} /> {children}
        <Footer isFooterFull={isFooterFull} />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  isSearchPresent: PropTypes.bool,
  isFooterFull: PropTypes.bool,
};

Layout.defaultProps = {
  isSearchPresent: false,
  isFooterFull: false,
};

export default Layout;
