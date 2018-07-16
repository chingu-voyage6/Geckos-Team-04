import React from 'react';
import styled from 'styled-components';
import Section from '../../../Layout/Section/Section';

const StyledSection = styled(Section)`
  background-image: linear-gradient(rgba(170, 170, 170, 0.4), rgba(170, 170, 170, 0.4)),
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
`;
const TitleWrapper = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

const HeroModal = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
`;
const ModalTitle = styled.div`
  color: #000;
  font-size: 28px;
  font-weight: bold;
`;

const nearMeHero = () => (
  <StyledSection>
    <Content>
      <TitleWrapper>House Cleaners near you</TitleWrapper>
      <HeroModal>
        <ModalTitle>Where do you need the house cleaner?</ModalTitle>
      </HeroModal>
    </Content>
  </StyledSection>
);

export default nearMeHero;
