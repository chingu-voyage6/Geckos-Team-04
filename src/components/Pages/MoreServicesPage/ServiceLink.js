/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-top: 3px;
  padding-bottom: 3px;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  color: #676d73;
  :hover {
    color: #009fd9;
  }

  @media (min-width: 701px) {
  
  width: 50%;
  
  }
  }
`;

const serviceLink = ({ children, to }) => <StyledLink to={to}>{children}</StyledLink>;

export default serviceLink;
