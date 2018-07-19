import React from 'react';
import styled from 'styled-components';
import Section from '../../../Layout/Section/Section';

import { DefaultButton } from '../../../Shared/UI/Button/Button';

const StyledSection = styled(Section)`
  background-image: linear-gradient(rgba(170, 170, 170, 0.3), rgba(170, 170, 170, 0.3)),
    url('https://source.unsplash.com/random');
  min-height: calc(100vh - 60px);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin: auto;
  padding: 0;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 115px);
    top: 55px;
    position: relative;
    margin: auto;
  }
`;

const Content = styled.div`
  text-align: center;
  width: 100%;
`;
const TitleWrapper = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1.5rem;
`;

const HeroModal = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 52px 48px;
  width: 50%;
  margin: auto;
`;
const ModalTitle = styled.div`
  color: #000;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 2rem;
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

const SearchWrappper = styled.div`
  width: 100%;
  display: flex;
`;

const nearMeHero = () => (
  <StyledSection>
    <Content>
      <TitleWrapper>House Cleaners near you</TitleWrapper>
      <HeroModal>
        <ModalTitle>Where do you need the house cleaner?</ModalTitle>
        <SearchWrappper>
          <SearchInput type="text" placeholder="Enter your zip code" />
          <DefaultButton>Go</DefaultButton>
        </SearchWrappper>
      </HeroModal>
    </Content>
  </StyledSection>
);

export default nearMeHero;
