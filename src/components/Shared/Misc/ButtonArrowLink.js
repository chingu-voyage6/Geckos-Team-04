import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Arrow } from '../Icon/Icon';

const StyledButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 20px;
  background-color: '#fff';

  ${props => {
    const { hasBorderTop, hasBorderBottom, hasBorderLeft, hasBorderRight } = props;

    if (hasBorderTop) {
      return 'border-top: 1px solid #e9eced';
    }
    if (hasBorderBottom) {
      return 'border-bottom: 1px solid #e9eced';
    }
    if (hasBorderLeft) {
      return 'border-left: 1px solid #e9eced';
    }
    if (hasBorderRight) {
      return 'border-right: 1px solid #e9eced';
    }
  }};
`;

const Title = styled(Link)`
  color: #2f3033;
  font-size: 16px;
  letter-spacing: 0.02em;
  font-weight: ${props => props.fontWeight};
  text-decoration: none;

  > span.isActive {
    color: #009fd9;
  }
  :hover {
    > span {
      color: #009fd9;
    }
  }
`;

const Button = props => {
  const {
    children,
    to,
    fontWeight,
    hasBorderTop,
    hasBorderBottom,
    hasBorderLeft,
    hasBorderRight,
  } = props;

  return (
    <StyledButton
      hasBorderTop={hasBorderTop}
      hasBorderBottom={hasBorderBottom}
      hasBorderLeft={hasBorderLeft}
      hasBorderRight={hasBorderRight}
    >
      <Title to={to} fontWeight={fontWeight}>
        {children}
      </Title>
      <Arrow color="currentColor" size="28" />
    </StyledButton>
  );
};

Button.defaultProps = {
  hasBorderTop: false,
  hasBorderBottom: false,
  hasBorderLeft: false,
  hasBorderRight: false,
  fontWeight: '700',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]), // eslint-disable-line react/require-default-props
  to: PropTypes.string.isRequired,
  hasBorderTop: PropTypes.bool,
  hasBorderBottom: PropTypes.bool,
  hasBorderLeft: PropTypes.bool,
  hasBorderRight: PropTypes.bool,
  fontWeight: PropTypes.string,
};

export default Button;
