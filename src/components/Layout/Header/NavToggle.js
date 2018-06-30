import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArrowOpen = styled.div`
  height: 18px;
  width: 18px;
  transform-origin: 50% 50%;
  transition: transform 0.1s linear;
  transform: ${({ isClosed }) => (isClosed ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

class NavToggle extends React.Component {
  render() {
    const { color, isClosed } = this.props;
    return (
      <ArrowOpen isClosed={isClosed}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            fillRule="evenodd"
            d="M14.646 6.764L9 13 3.311 6.725a1 1 0 0 1 1.342-1.482L9 10l4.285-4.699c.2-.187.435-.301.715-.301a1 1 0 0 1 1 1c0 .306-.151.537-.354.764z"
          />
        </svg>
      </ArrowOpen>
    );
  }
}

NavToggle.propTypes = {
  color: PropTypes.string.isRequired,
  isClosed: PropTypes.bool.isRequired,
};

export default NavToggle;
