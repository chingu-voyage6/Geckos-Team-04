import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled.li`
  list-style: none;
  width: 100%;
  padding: 10px 0;
  margin: 0;
  height: auto;
  cursor: pointer;
  display: initial;
  > a {
    text-decoration: none;
    color: #000;
    font-size: 1.6rem;
  }
  :hover {
      background-color: #e8e8e8;
      > a {
        color: #79d2f2;
      }
  }
   @media (min-width: 700px) {
     
        list-style: none;
        margin: 0 12px;
        height: 100%;
        display: ${({ title }) => (title === 'Home' ? 'none' : 'flex')};
        padding: 0;
        align-items: center;
        border-bottom: 2px solid rgba(80, 80, 80, 0);
        width: auto;
        cursor: pointer;
        > a {
          text-decoration: none;
          color: #676d73;
          font-size: 1rem;
          font-weight: normal;
        }
        :hover {
        border-bottom: 2px solid #808080;
        background: transparent;
        > a {
          color: #282828;
        }    
   }
`;

export default class NavLink extends React.Component {
  render() {
    const { to, title } = this.props;
    return (
      <LinkStyled title={title}>
        <Link to={to}>{title}</Link>
      </LinkStyled>
    );
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
