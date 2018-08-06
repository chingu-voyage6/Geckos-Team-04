import React from 'react';
import styled from 'styled-components';
import Section from '../../../Layout/Section/Section';
import { SearchButton } from '../../../Shared/UI/Button/Button';
import { PlayIcon, SearchIconButton } from '../../../Shared/Icon/Icon';
import Search from '../../../Shared/Search/Search';

const StyledSection = styled(Section)`
  overflow: visible !important;
  > div {
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow-y: visible !important;
    @media (min-width: 701px) {
      min-height: 600px;
    }
  }
`;
const HeroContentWrapper = styled.div`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  height: auto;
  @media (min-width: 701px) {
    width: 66.7%;
  }
`;
const SearchWrappper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2.2rem;
`;

const HeroTile = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 2.2rem;
  line-height: normal;
  @media (min-width: 701px) {
    font-size: 40px;
  }
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

export const SearchGlass = styled.span`
  display: inline;
  transform: scale(1.1);
  padding: 0;
  @media (min-width: 482px) {
    display: none;
  }
`;
const StyledSerachButton = styled(SearchButton)`
  border-radius: 0 4px 4px 0;
`;

const SpanBtnLabel = styled.span`
  display: none;

  @media (min-width: 482px) {
    display: inline;
  }
`;
const heroSection = () => (
  <StyledSection padding={false} hasBorder>
    <HeroContentWrapper>
      <HeroTile>Find local professionals for pretty much anything.</HeroTile>
      <SearchWrappper>
        <Search />
        <StyledSerachButton click={() => {}}>
          <SearchGlass size="18">
            <SearchIconButton size="18" />
          </SearchGlass>
          <SpanBtnLabel>Get Started</SpanBtnLabel>
        </StyledSerachButton>
      </SearchWrappper>
      <VideoButton role="button">
        <PlayIcon color="#000" size="28" />
        <p>See how it works</p>
      </VideoButton>
    </HeroContentWrapper>
  </StyledSection>
);

export default heroSection;
