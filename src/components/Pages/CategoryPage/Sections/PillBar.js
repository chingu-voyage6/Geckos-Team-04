/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import Section from '../../../Layout/Section/Section';
import {
  EventsIcon,
  HomeImprovementIcon,
  LessonsIcon,
  WellnessIcon,
  BusinessIcon,
  CraftsIcon,
  WebDesignIcon,
  ThreeDotsLarge,
  CarretIcon,
} from '../../../Shared/Icon/Icon';

const iconData = [
  {
    icon: EventsIcon,
    to: '/events',
    categoryTitle: 'Events',
  },
  {
    icon: HomeImprovementIcon,
    to: '/home-improvement',
    categoryTitle: 'Home',
  },

  {
    icon: LessonsIcon,
    to: '/lessons',
    categoryTitle: 'Lessons',
  },
  {
    icon: WellnessIcon,
    to: '/wellness',
    categoryTitle: 'Wellness',
  },
  {
    icon: BusinessIcon,
    to: '/more-services#category-group-business',
    categoryTitle: 'Business',
  },
  {
    icon: CraftsIcon,
    to: '/more-services#category-group-crafts',
    categoryTitle: 'Crafts',
  },
  {
    icon: WebDesignIcon,
    to: '/more-services#category-group-pets',
    categoryTitle: 'Design & Web',
  },
  {
    icon: ThreeDotsLarge,
    to: '/more-services',
    categoryTitle: 'More',
  },
];

const StyledSection = styled(Section)`
  padding: 16px;
  > div {
    padding: 0;

    @media (min-width: 482px) {
      max-width: 668px;
      max-width: 449px;
      padding-left: 0;
      padding-right: 0;
    }

    @media (min-width: 701px) {
      max-width: 668px;
    }

    @media (min-width: 1026px) {
      max-width: 946px;
    }
  }
`;

const CarrotWrapper = styled.div`
  /* transform-origin: 50% 50%; */
  transform: rotate(180deg);
  color: #2f3033;
  > * {
    position: absolute;
    transform: translateY(-50%);
    top: -50%;
  }

  @media only screen and (min-width: 480px) {
    display: none;
  }
`;

const NavigationList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: space-between;
  margin-top: 20px;

  li {
    background: #fff;
    border: 1px solid #e9eced;
    margin-bottom: -1px;
  }
  li:nth-child(n + 5) {
    display: none;
  }

  li:nth-child(1) {
    border-radius: 4px 4px 0 0;
  }

  li:nth-child(4) {
    border-radius: 0 0 4px 4px;
  }

  @media (min-width: 482px) {
    border: 1px solid transparent;
    flex-direction: row;
    li {
      background: transparent;
      border: none !important;
    }
    li:last-child {
      display: initial;
    }
  }

  @media (min-width: 701px) {
    li:nth-child(5),
    li:nth-child(6) {
      display: initial;
    }
  }

  @media (min-width: 1026px) {
    li:nth-child(7) {
      display: initial;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  align-items: center;
  justify-content: center;

  :hover {
    > div {
      color: #009fd9 !important;
      transition: color 0.2s linear;
    }
  }
  @media only screen and (min-width: 482px) {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: center;
  }
`;
const GetIcon = ({ tag, size }) => {
  const TagName = tag;
  return <TagName size={size} />;
};
GetIcon.propTypes = {
  size: PropTypes.string.isRequired,
  tag: PropTypes.element.isRequired,
};

const IconWrapper = styled.div`
  transition: color 0.2s;
  transform: scale(0.5);
  color: #2f3033;
  @media only screen and (min-width: 482px) {
    transform: scale(1);
    color: #d3d4d5;
  }
`;
const TitleWrapper = styled.div`
  transition: color 0.2s;
  flex-grow: 1;
  color: #2f3033;
  @media only screen and (min-width: 482px) {
    flex-grow: 1;
    color: #676d73;
  }
`;

const NavigationItem = ({ to, icon, categoryTitle }) => (
  <StyledLink to={to}>
    <IconWrapper>
      <GetIcon tag={icon} size="48" />
    </IconWrapper>
    <TitleWrapper>{categoryTitle}</TitleWrapper>
    <CarrotWrapper>
      <CarretIcon size="28" />
    </CarrotWrapper>
  </StyledLink>
);

NavigationItem.propTypes = {
  to: PropTypes.string.isRequired,
  categoryTitle: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

const MobileTitle = styled.div`
  margin-top: 16px;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  display: block;

  @media (min-width: 482px) {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  display: block;
  max-width: 30%;
  margin: 20px auto 0 auto;
  text-align: center;
  text-decoration: none;
  color: #009fd9;

  @media (min-width: 482px) {
    display: none;
  }
`;
const PillBar = () => (
  <StyledSection isGray padding={false}>
    <MobileTitle>All Services</MobileTitle>
    <NavigationList>
      {iconData.map(({ icon, to, categoryTitle }) => (
        <li>
          <NavigationItem to={to} icon={icon} categoryTitle={categoryTitle} key={categoryTitle} />
        </li>
      ))}
    </NavigationList>
    <MobileLink to="/more-services">See More</MobileLink>
  </StyledSection>
);

export default PillBar;
