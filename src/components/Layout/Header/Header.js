import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MobileMenuToggle from './MobileMenuToggle';
import LogoFull from '../../Shared/SVG/LogoFull';
import NavLink from './NavLink';
import SearchBar from '../../Shared/SearchBar/SearchBar';

const HeaderStyled = styled.header`
  margin-bottom: 60px;

  @media (min-width: 700px) {
    margin-bottom: 0;
  }
`;
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
      isClosed ? 'transform: translateY(-100vh);' : 'transform: translateY(45px);'} padding: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
  }
  @media (min-width: 700px) {
    border-bottom: 1px solid #eee;
    height: 60px;
    display: flex;
    justify-content: space-between;

    > ul {
      position: relative;
      transform: none;
      height: auto;
      width: auto;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      min-height: 100%;
      margin: 0 10px 0 0;
      box-sizing: border-box;
    }
  }
`;

const LogoFullStyledLink = styled(Link)`
  padding: 20px;
  display: none;

  @media (min-width: 700px) {
    display: initial;
  }
`;

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
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
    title: 'Log In',
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
    const { search } = this.props;
    return (
      <HeaderStyled>
        <MobileNav onClick={this.openDropdownHandler}>
          <MobileMenuToggle isClosed={isClosed} />
        </MobileNav>
        <Navigation isClosed={isClosed}>
          <LogoFullStyledLink to="/">
            <LogoFull />
          </LogoFullStyledLink>
          {search ? <SearchBar /> : null}
          <ul>
            {navLinks.map(({ to, title }) => (
              <NavLink close={this.openDropdownHandler} key={title} to={to} title={title} />
            ))}
          </ul>
        </Navigation>
      </HeaderStyled>
    );
  }
}

Header.propTypes = {
  search: PropTypes.bool,
};

Header.defaultProps = {
  search: false,
};

export default Header;
