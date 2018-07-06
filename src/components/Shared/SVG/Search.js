import React from 'react';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
  render() {
    const { color, className, isFocused } = this.props;
    const focusedColor = '#009fd9';
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill={isFocused ? focusedColor : color}
      >
        <path d="M19.024 17.611A8.942 8.942 0 0 0 21 12c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9a8.948 8.948 0 0 0 5.61-1.975l5.684 5.682c.194.195.45.293.706.293a.994.994 0 0 0 .706-.293.997.997 0 0 0 0-1.414l-5.681-5.682zM5 12c0-3.859 3.142-7 7-7s7 3.141 7 7-3.142 7-7 7-7-3.141-7-7z" />
      </svg>
    );
  }
}

Search.defaultProps = {
  color: '#2f3033',
  className: '',
  isFocused: false,
};

Search.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  isFocused: PropTypes.bool,
};
