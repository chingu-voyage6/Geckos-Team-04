import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  HouseIcon,
  CakeIcon,
  ConfettiIcon,
  FlowerIcon,
  AppleIcon,
  ThreeDotsIcon,
} from '../Icon/Icon';

const pillContent = [
  {
    component: HouseIcon,
    title: 'Home',
    linkTo: '/home-improvement',
    color: '#5968e2',
  },
  {
    component: CakeIcon,
    title: 'Weddings',
    linkTo: '/weddings',
    color: '#febe14',
  },
  {
    component: ConfettiIcon,
    title: 'Events',
    linkTo: '/events',
    color: '#a97ff0',
  },
  {
    component: FlowerIcon,
    title: 'Wellness',
    linkTo: '/wellness',
    color: '#2db783',
  },
  {
    component: AppleIcon,
    title: 'Lessons',
    linkTo: '/lessons',
    color: '#ff5a5f',
  },
  {
    component: ThreeDotsIcon,
    title: 'More',
    linkTo: '/more-services',
    color: '#2f3033',
  },
];

const GetIcon = ({ icon, color }) => {
  const Component = icon;

  return <Component style={{ color }} size="28" />;
};

const PillWrapper = styled.div`
  box-shadow: 0 0 10px 0 rgba(47, 48, 51, 0.2);
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  z-index: 100;
  background-color: #fff;
  transform: translateY(-50%);

  @media (min-width: 482px) {
    flex-wrap: nowrap;
  }
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
    {pillContent.map(({ component, color, title, linkTo }) => (
      <PillStyled key={title} to={linkTo}>
        <div>
          <div style={{ color }}>
            <GetIcon icon={component} />
          </div>

          <span>{title}</span>
        </div>
      </PillStyled>
    ))}
  </PillWrapper>
);

export default navPillBar;
