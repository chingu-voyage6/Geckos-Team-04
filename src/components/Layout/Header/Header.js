import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.ul`
  display: flex;
  justify-content: space-around;
  > * {
    list-style: none;
    text-decoration: none;
  }
`;
const header = () => (
  <header>
    <nav>
      <NavBar>
        <li>Thumbtack Navbar to create =>>></li>
        <Link to="/">Thumbtack</Link>
        <Link to="/explore">Explore</Link>
      </NavBar>
    </nav>
  </header>
);

export default header;
