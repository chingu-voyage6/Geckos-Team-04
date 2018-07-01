import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavLink from './NavLink';

const Navigation = styled.nav`
  border-bottom: 1px solid #eee;
  display: flex;

  justify-content: space-between;
  > ul {
    display: flex;
    flex-direction: column;
    position: fixed;
    transition: transform 0.3s linear;
    ${({ isClosed }) =>
      isClosed ? 'transform: translateY(-100vh);' : 'transform: translateY(60px);'} padding: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    border: solid 2px red;
    > li {
      list-style: none;
      width: 100%;
      padding: 10px 0;
      cursor: pointer;
      > a {
        text-decoration: none;
        color: #000;
        font-size: 1.6rem;
      }
    }
    > li:hover {
      background-color: #e8e8e8;

      > a {
        color: #79d2f2;
      }
    }
  }
  @media (min-width: 700px) {
    border-bottom: 1px solid #eee;
    min-height: 30px;
    display: flex;
    justify-content: space-between;

    > ul {
      position: relative;
      transform: none;
      height: auto;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      min-height: 100%;
      margin: 0 10px 0 0;
      box-sizing: border-box;

      > li {
        list-style: none;
        margin: 0 12px;
        min-height: 100%;
        display: flex;
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
      }
      > li:hover {
        border-bottom: 2px solid #808080;
        background: transparent;
        > a {
          color: #282828;
        }
      }
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

  @media (min-width: 700px) {
    display: none;
  }
`;

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 30px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  background: #fff;
  @media (min-width: 700px) {
    display: none;
  }
`;
const MobileHome = styled.li`
  display: initial;

const navLinks = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/explore',
    title: 'Explore',
  },
  {
    to: '/pro',
    title: 'Join as a Pro',
  },
  {
    to: '/choose-account',
    title: 'Sign Up',
  },
  {
    to: '/login',
    title: 'Login',
  },
];

class Header extends React.Component {
  state = {
    isClosed: true,
  };

  openDropdownHandler = () => {
    this.setState(previousState => ({ isClosed: !previousState.isClosed }));
  };

  render() {
    const { isClosed } = this.state;
    return (
      <header>
        <MobileNav onClick={this.openDropdownHandler}>
          <LogoRound src={logoRound} alt="logo" />
          <NavToggle isClosed={isClosed} color="#000" />
        </MobileNav>
        <Navigation isClosed={isClosed}>
          <Link to="/">
            <Logo src={logoFull} alt="logo" />
          </Link>

          <ul>{navLinks.map(({ to, title }) => <NavLink key={title} to={to} title={title} />)}</ul>
        </Navigation>
      </header>
    );
  }
}

export default Header;
