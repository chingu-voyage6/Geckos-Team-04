import React from 'react';
import styled from 'styled-components';
import { DefaultButton } from '../../../Shared/UI/Button/Button';
import Section from '../../../Layout/Section/Section';

/* <div class="pro-upsell__image" style="background-image:url(https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/pro-upsell/pro-upsell-illustration.d37ba3a3bd2d29038bded72ec4d5e0d7.png)" alt="Pro Upsell Illustation"></div> */

const StyledSection = styled(Section)`
  > div {
    display: flex;
    flex-direction: column;

    @media (min-width: 482px) {
      display: flex;
      flex-direction: row;
    }
  }
`;

const SectionHalf = styled.div`
  max-width: 100%;
  display: block;
  min-height: 100%;
  align-items: center;
  position: relative;
  @media (min-width: 482px) {
    max-width: 50%;
    padding: 0;
    display: flex;
  }
`;

const StyledImage = styled.img`
  transform: scale(1.2);
  left: 50px;
  top: 10px;
  display: block;
  position: relative;

  @media (min-width: 482px) {
    left: 0;
  }
  @media (min-width: 701px) {
    transform: scale(1.2);
    display: initial;
    position: initial;
  }
`;

const SectionText = styled.div`
  color: #676d73;
  font-size: 0.9rem;
  margin-bottom: 1rem;

  @media (min-width: 701px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.div`
  white-space: nowrap;
  margin-bottom: 0.5rem;
  @media (min-width: 701px) {
    margin-bottom: 1rem;
  }
`;

const ContentWrapper = styled.div`
  margin: 50px 0;
  padding-left: 0;
  @media (min-width: 701px) {
    margin: initial;
    padding-left: 1rem;
  }
`;

const openForBusinessSection = () => (
  <StyledSection isGray hasBorder padding={false}>
    <SectionHalf>
      <StyledImage
        src="https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/pro-upsell/pro-upsell-illustration.d37ba3a3bd2d29038bded72ec4d5e0d7.png"
        alt="Open for business"
      />
    </SectionHalf>
    <SectionHalf>
      <ContentWrapper>
        <SectionTitle>
          <h2>Open for business.</h2>
        </SectionTitle>
        <SectionText>
          <p>Whatever work you do, we'll find you the jobs you want.</p>
        </SectionText>
        <DefaultButton>Become a Thumbtack pro</DefaultButton>
      </ContentWrapper>
    </SectionHalf>
  </StyledSection>
);

export default openForBusinessSection;
