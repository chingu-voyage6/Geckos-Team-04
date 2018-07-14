import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Arrow } from '../../Shared/Icon/Icon';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 20px;
  background-color: ${props => props.color || '#fff'};
`;

const Title = styled(Link)`
  color: #2f3033;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
`;

const Button = props => {
  const { children, to } = props;
  return (
    <Wrapper>
      <Title to={to}>{children}</Title>
      <Arrow color="currentColor" size="28" />
    </Wrapper>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Button;
