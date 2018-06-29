import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoFull from '../../../Assets/thumbtack.svg';
import logoRound from '../../../Assets/thumbtack-round.svg';

const Navigation = styled.nav`
  border-bottom: 1px solid #eee;
  min-height: 30px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 700px) {
    border-bottom: 1px solid #eee;
    min-height: 30px;
    display: flex;
    justify-content: space-between;
  }
  > ul {
    display: flex;
    align-items: center;
    min-height: 100%;
    margin: 0 10px 0 0;
    box-sizing: border-box;

    > li {
      list-style: none;
      margin: 0 12px;
      min-height: 100%;
      display: flex;
      align-items: center;
      border-bottom: 2px solid rgba(80, 80, 80, 0);
      > a {
        text-decoration: none;
        color: #676d73;
      }
      > a:hover {
        color: #282828;
      }
    }
    > li:hover {
      border-bottom: 2px solid #808080;
    }
  }
`;

const Logo = styled.img`
  padding: 20px;
  display: none;

  @media (min-width: 700px) {
    display: initial;
  }
`;

const LogoRound = styled.img`
  padding: 20px;
  display: initial;
  color: #009fd9!important;
  fill: #009fd9!important;
  @media (min-width: 700px) {
    display:none;`

const header = () => (
  <header>
    <div />
    <Navigation>
      <Link to="/">
        <Logo src={logoFull} alt="logo" />
      </Link>
        <LogoRound src={logoRound} alt="logo" />
      <ul>
        <li>
          <Link to="/explore"> Explore </Link>
        </li>
        <li>
          <Link to="/pro">Join as a Pro</Link>
        </li>
        <li>
          <Link to="/choose-acount"> Sign Up </Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </Navigation>
  </header>
);

export default header;
