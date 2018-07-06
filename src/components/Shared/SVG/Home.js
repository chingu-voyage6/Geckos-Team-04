import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill={color}
      >
        <path
          fillRule="evenodd"
          d="M24 9.89l1.633 1.337a.999.999 0 1 1-1.266 1.547l-.367-.3V23c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V12.474l-.367.3a1 1 0 1 1-1.266-1.547l11-9a.998.998 0 0 1 1.266 0L18 4.981V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6.89zM22 23V10.838l-8-6.546-8 6.546V23c0 .551.45 1 1 1h14c.551 0 1-.449 1-1zm-5-11a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6zm-5 6h4v-4h-4v4zm8-14v2.617l2 1.636V4h-2z"
        />
      </svg>
    );
  }
}

Home.defaultProps = {
  color: '#5968e2',
};

Home.propTypes = {
  color: PropTypes.string,
};
