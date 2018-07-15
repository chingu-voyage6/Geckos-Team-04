import React from 'react';
import styled from 'styled-components';
import Section from '../../../Layout/Section/Section';
import { SearchButton } from '../../../Shared/UI/Button/Button';
import { PlayIcon } from '../../../Shared/Icon/Icon';

const StyledSection = styled(Section)`
  min-height: 600px;
  > div {
    min-height: 600px;
    display: flex;
    align-items: center;
  }
`;
const HeroContentWrapper = styled.div`
  width: 100%;

  @media (min-width: 701px) {
    width: 66.7%;
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
  box-shadow: 0 0 5px 0 rgba(47, 48, 51, 0.2);
  border-radius: 4px 0 0 4px;

  ::placeholder {
    color: #8a8a8a;
    opacity: 1;
  }
`;
const HeroTile = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2.2rem;
  line-height: 2.6rem;
`;

const VideoButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > :first-child {
    display: block;
    margin-right: 5px;
  }
`;
const heroSection = () => (
  <StyledSection padding={false} hasBorder>
    <HeroContentWrapper>
      <HeroTile>Find local professionals for pretty much anything.</HeroTile>
      <SearchWrappper>
        <SearchInput type="text" placeholder="Who do you need to hire?" />
        <SearchButton click={() => {}}>Get Started</SearchButton>
      </SearchWrappper>
      <VideoButton role="button">
        <PlayIcon color="#000" size="28" />
        <p>See how it works</p>
      </VideoButton>
    </HeroContentWrapper>
  </StyledSection>
);

export default heroSection;
