/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: block;
  width: 50%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  color: #676d73;
  :hover {
    color: #009fd9;
  }
`;

const serviceLink = ({ children, to }) => <StyledLink to={to}>{children}</StyledLink>;

export default serviceLink;
