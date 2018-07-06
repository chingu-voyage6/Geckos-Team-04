import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Landing extends Component {
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

Landing.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Landing;
