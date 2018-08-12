import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import { CopyRight } from './Footer/CopyRight';

class Layout extends Component {
  render() {
    const { children, search, footerIsVisible, defaultCopyright } = this.props;
    return (
      <div>
        <Header search={search} />
        {children}

        <Footer isVisible={footerIsVisible} />

        <CopyRight defaultCopyright={defaultCopyright} />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  search: PropTypes.bool,
  footerIsVisible: PropTypes.bool,
  defaultCopyright: PropTypes.bool,
};

Layout.defaultProps = {
  search: false,
  footerIsVisible: true,
  defaultCopyright: true,
};

export default Layout;
