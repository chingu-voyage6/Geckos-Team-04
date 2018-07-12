import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Section from '../../../Layout/Section/Section';
import { SearchButton } from '../../../Shared/UI/Button/Button';

const SectionTitle = styled.div`
  margin-bottom: 1.5rem;
`;
const CategoryBar = styled.div``;

const StyledSection = styled(Section)`
  padding-top: 40px;
  padding-bottom: 40px;
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
  box-shadow: 0 0 5px 0 rgba(47, 48, 51, 0.2);
  border-radius: 4px 0 0 4px;

  ::placeholder {
    color: #8a8a8a;
    opacity: 1;
  }
`;
const exploreHeroSection = () => (
  <StyledSection isGray hasBorder>
    <SectionTitle>
      <h1>Hire skilled pros for over 1,000 services.</h1>
    </SectionTitle>
    <SearchWrappper>
      <SearchInput type="text" placeholder="What service are you looking for?" />
      <SearchButton click={() => {}}>Search</SearchButton>
    </SearchWrappper>
    <CategoryBar>Icons lkalalala</CategoryBar>
  </StyledSection>
);

export default exploreHeroSection;
