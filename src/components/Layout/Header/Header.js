import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MobileMenuToggle from './MobileMenuToggle';
import LogoFull from '../../Shared/SVG/LogoFull';
import NavLink from './NavLink';
import SearchBar from '../../Shared/SearchBar/SearchBar';
import { isAuthenticated } from '../../auth/auth-helper';
import Dropdown from './Profile/Dropdown';

const HeaderStyled = styled.header`
  margin-bottom: 45px;

  @media (min-width: 700px) {
    margin-bottom: 0;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;

  z-index: 1000;
  > ul {
    display: flex;
    flex-direction: column;
    position: fixed;
    transition: transform 0.3s linear;
    transform: ${({ isClosed }) => (isClosed ? ' translateY(-100vh)' : 'translateY(60px)')};
    padding: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    z-index: 999;
  }
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    height: 60px;
    border-bottom: 1px solid #eee;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 999;
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

const navLinksPrivate = [
  {
    to: '/explore',
    title: 'Explore',
  },
  {
    to: '/profile/requests',
    title: 'Projects',
  },
  {
    to: '/customer/inbox',
    title: 'Messages',
  },
];

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClosed: true,
    };
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollToTop);
  }

  openDropdownHandler = () => {
    window.addEventListener('scroll', this.scrollToTop);
    this.setState(previousState => ({ isClosed: !previousState.isClosed }));
  };

  scrollToTop = () => {
    const { isClosed } = this.state;
    if (!isClosed) window.scrollTo(0, 0);
  };

  render() {
    const { isClosed } = this.state;
    const { search } = this.props;
    const jwt = isAuthenticated();
    let renderLinks;
    if (jwt) {
      renderLinks = navLinksPrivate.map(({ to, title }) => (
        <NavLink close={this.openDropdownHandler} key={title} to={to} title={title} />
      ));
      renderLinks.push(
        <Dropdown key="dropdown" firstName={jwt.user.name.first} lastName={jwt.user.name.last} />
      );
    } else {
      renderLinks = navLinks.map(({ to, title }) => (
        <NavLink close={this.openDropdownHandler} key={title} to={to} title={title} />
      ));
    }

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
          <ul>{renderLinks}</ul>
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
