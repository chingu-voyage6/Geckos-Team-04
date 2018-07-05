import React from 'react';
import PropTypes from 'prop-types';

export default class More extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        width="28"
        height="28"
        viewBox="0 0 28 28"
      >
        <path
          fillRule="evenodd"
          d="M22 12a2 2 0 0 0 0 4c1.103 0 2-.897 2-2 0-1.104-.897-2-2-2m-8 0c-1.103 0-2 .896-2 2 0 1.103.897 2 2 2s2-.897 2-2c0-1.104-.897-2-2-2m-8 0a2 2 0 0 0 0 4c1.103 0 2-.897 2-2 0-1.104-.897-2-2-2"
        />
      </svg>
    );
  }
}

More.defaultProps = {
  color: '#2f3033',
};

More.propTypes = {
  color: PropTypes.string,
};
