import React from 'react';
import PropTypes from 'prop-types';

export default class LogoRounds extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <svg width="36" height="36" viewBox="0 0 16 16" fill={color}>
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0" />
        <path
          fill="#FFF"
          d="M8.973 10.385a3.71 3.71 0 0 1-.564 1.957L8 13l-.409-.658a3.704 3.704 0 0 1-.564-1.957v-3.14C7.51 6.62 8.231 6.4 8.973 6.4v3.985zM4 5.69V4h8v1.69H4z"
        />
      </svg>
    );
  }
}

LogoRounds.defaultProps = {
  color: '#009fd9',
};

LogoRounds.propTypes = {
  color: PropTypes.string,
};
