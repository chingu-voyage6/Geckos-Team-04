import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// SVG component imports
import Home from '../SVG/Home';
import Weddings from '../SVG/Weddings';
import Events from '../SVG/Events';
import Wellness from '../SVG/Wellness';
import Lessons from '../SVG/Lessons';
import More from '../SVG/More';

const pillContent = [
  {
    component: <Home />,
    title: 'Home',
    linkTo: '/home-improvement',
  },
  {
    component: <Weddings />,
    title: 'Weddings',
    linkTo: '/weddings',
  },
  {
    component: <Events />,
    title: 'Events',
    linkTo: '/events',
  },
  {
    component: <Wellness />,
    title: 'Wellness',
    linkTo: '/wellness',
  },
  {
    component: <Lessons />,
    title: 'Lessons',
    linkTo: '/lessons',
  },
  {
    component: <More />,
    title: 'More',
    linkTo: '/more-services',
  },
];

const PillWrapper = styled.div`
  box-shadow: 0 0 10px 0 rgba(47, 48, 51, 0.2);
  max-width: 960px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  z-index: 100;
  background-color: #fff;
  transform: translateY(-50%);
`;

const PillStyled = styled(Link)`
  display: block;
  width: 33.3%;
  text-decoration: none;
  color: #2f3033;
  @media (min-width: 700px) {
    width: 16.6%;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 24px 0;
    align-items: center;
    font-size: 14px;

    > * {
      display: block;
      :first-child {
        margin-bottom: 7px;
      }
    }
    :hover {
      > span {
        color: #009fd9;
      }
    }
  }
`;

const navPillBar = () => (
  <PillWrapper>
    {pillContent.map(({ component, title, linkTo }) => (
      <PillStyled key={title} to={linkTo}>
        <div>
          {component}
          <span>{title}</span>
        </div>
      </PillStyled>
    ))}
  </PillWrapper>
);

export default navPillBar;
