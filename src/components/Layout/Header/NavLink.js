import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyled = styled.li`
  list-style: none;
  width: 100%;
  padding: 20px 14px;
  margin: 0;
  height: auto;
  cursor: pointer;
  display: initial;
  > a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    font-weight: 700;
  }
  :hover {
    background-color: #fafafa;
    > a {
      color: #009fd9;
    }
  }
  @media (min-width: 700px) {
    list-style: none;
    margin: 0 12px;
    height: 100%;
    display: ${({ title }) => (title === 'Home' ? 'none' : 'flex')};
    padding: 0;
    align-items: center;
    border-bottom: 0 solid #e9eced;
    width: auto;
    cursor: pointer;
    > a {
      text-decoration: none;
      color: #676d73;
      font-size: 13px;
      font-weight: normal;
    }
    :hover {
      box-shadow: inset 0 -3px 0 #d3d4d5;
      background: transparent;
      > a {
        color: #2f3033;
      }
    }
`;

export default class NavLink extends React.Component {
  render() {
    const { to, title, close } = this.props;
    return (
      <LinkStyled title={title}>
        <Link onClick={close} to={to}>
          {title}
        </Link>
      </LinkStyled>
    );
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
