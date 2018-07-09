import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Section from './Section/Section';
import { CopyRight } from './Footer/CopyRight';

class Layout extends Component {
  render() {
    const { children, search, footerIsVisible, defaultCopyright } = this.props;
    return (
      <div>
        <Header search={search} />
        {children}
        <Section padding={false}>
          <Footer isVisible={footerIsVisible} />
          <CopyRight defaultCopyright={defaultCopyright} />
        </Section>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
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
