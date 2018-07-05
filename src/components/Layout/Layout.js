import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Section from './Section/Section';

class Layout extends Component {
  render() {
    const { children, search, isFooterFull } = this.props;
    return (
      <div>
        <Header search={search} /> {children}
        <Section padding={false}>
          <Footer isFooterFull={isFooterFull} />
        </Section>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  search: PropTypes.bool,
  isFooterFull: PropTypes.bool,
};

Layout.defaultProps = {
  search: false,
  isFooterFull: false,
};

export default Layout;
