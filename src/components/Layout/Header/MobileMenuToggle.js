import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chevron from '../../Shared/SVG/Chevron';
import LogoRound from '../../Shared/SVG/LogoRound';

const ArrowOpen = styled.div`
  height: 18px;
  width: 18px;
  margin-left: 4px;
  transform-origin: 50% 50%;
  transition: transform 0.1s linear;
  transform: ${({ isClosed }) => (isClosed ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: auto;
`;

class MobileMenuToggle extends React.Component {
  render() {
    const { isClosed } = this.props;
    return (
      <ToggleWrapper>
        <LogoRound />
        <ArrowOpen isClosed={isClosed}>
          <Chevron />
        </ArrowOpen>
      </ToggleWrapper>
    );
  }
}

MobileMenuToggle.propTypes = {
  isClosed: PropTypes.bool.isRequired,
};

export default MobileMenuToggle;
