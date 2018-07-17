import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ChevronIcon } from '../../Shared/Icon/Icon';
import LogoRound from '../../Shared/SVG/LogoRound';

const ArrowOpen = styled.div`
  margin-left: 4px;
  transform-origin: 50% 50%;
  transition: transform 0.1s linear;
  transform: ${({ isClosed }) => (isClosed ? 'rotate(0deg)' : 'rotate(180deg)')};
  > * {
    display: block;
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px 10px 14px;
  width: auto;
`;

class MobileMenuToggle extends React.Component {
  render() {
    const { isClosed } = this.props;
    return (
      <ToggleWrapper>
        <LogoRound />
        <ArrowOpen isClosed={isClosed}>
          <ChevronIcon width={18} height={18} color="#676d73" />
        </ArrowOpen>
      </ToggleWrapper>
    );
  }
}

MobileMenuToggle.propTypes = {
  isClosed: PropTypes.bool.isRequired,
};

export default MobileMenuToggle;
