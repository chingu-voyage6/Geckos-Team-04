import React from 'react';
import styled from 'styled-components';
import Section from '../../../Layout/Section/Section';
import { SearchButton } from '../../../Shared/UI/Button/Button';
import CategoryBar from '../../../Shared/CategoryBar/CategoryBar';

import {
  SearchIconButton,
  HouseIconSmall,
  ConfettiIconSmall,
  AppleIconSmall,
  FlowerIconSmall,
  PawIconSmall,
  ButtonIconSmall,
  BriefcaseIconSmall,
  ThreeDotsIconSmall,
} from '../../../Shared/Icon/Icon';

const SectionTitle = styled.div`
  margin-bottom: 1.5rem;
`;
// const CategoryBar = styled.div``;
const iconData = [
  {
    icon: HouseIconSmall,
    to: '/home-improvement',
    categoryTitle: 'Home',
  },
  {
    icon: ConfettiIconSmall,
    to: '/events',
    categoryTitle: 'Events',
  },
  {
    icon: AppleIconSmall,
    to: '/lessons',
    categoryTitle: 'Lessons',
  },
  {
    icon: FlowerIconSmall,
    to: '/wellness',
    categoryTitle: 'Wellness',
  },
  {
    icon: PawIconSmall,
    to: '/more-services#category-group-pets',
    categoryTitle: 'Pets',
  },

  {
    icon: ButtonIconSmall,
    to: '/more-services#category-group-crafts',
    categoryTitle: 'Crafts',
  },
  {
    icon: BriefcaseIconSmall,
    to: '/more-services#category-group-business',
    categoryTitle: 'Business',
  },
  {
    icon: ThreeDotsIconSmall,
    to: '/more-services',
    categoryTitle: 'More',
  },
];
const StyledSection = styled(Section)`
  padding-top: 40px;
  padding-bottom: 0;

  @media (min-width: 482px) {
    padding-bottom: 40px;
  }
`;

const SearchWrappper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2.2rem;
`;
const SearchInput = styled.input`
  padding: 15px;
  border: solid 1px #d3d4d5;
  flex-grow: 1;

  border-radius: 4px 0 0 4px;

  ::placeholder {
    color: #8a8a8a;
    opacity: 1;
  }
`;
export const SearchGlass = styled.span`
  display: inline;
  height: ${({ size }) => size}px;
  transform: scale(1.1) translateY(-2px);
  padding: 0;
  @media (min-width: 482px) {
    padding: 0 20px;
  }

  @media (min-width: 1026px) {
    padding: 0 5px 0 0;
  }
`;

const SpanBtnLabel = styled.span`
  display: none;

  @media (min-width: 1026px) {
    display: inline;
  }
`;

const StyledCategoryBar = styled(CategoryBar)`
  li {
    display: none;
  }
  @media (min-width: 482px) {
    li:nth-child(1),
    li:nth-child(2),
    li:nth-child(3),
    li:last-child {
      display: flex;
    }
  }

  @media (min-width: 701px) {
    li:nth-child(4),
    li:nth-child(5) {
      display: flex;
    }
  }

  @media (min-width: 1026px) {
    li {
      display: flex;
    }
  }
`;

const exploreHeroSection = () => (
  <StyledSection isNarrow isGray hasBorder>
    <SectionTitle>
      <h1>Hire skilled pros for over 1,000 services.</h1>
    </SectionTitle>
    <SearchWrappper>
      <SearchInput type="text" placeholder="What service are you looking for?" />
      <SearchButton click={() => {}}>
        <SearchGlass size="18">
          <SearchIconButton size="18" />
        </SearchGlass>
        <SpanBtnLabel>Search</SpanBtnLabel>
      </SearchButton>
    </SearchWrappper>
    <StyledCategoryBar categories={iconData} />
  </StyledSection>
);

export default exploreHeroSection;
