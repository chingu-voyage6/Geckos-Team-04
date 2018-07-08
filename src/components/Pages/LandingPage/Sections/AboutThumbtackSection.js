import React from 'react';
import styled from 'styled-components';
// import { DefaultButton } from '../../../Shared/UI/Button/Button';
import Section from '../../../Layout/Section/Section';

const StyledSection = styled(Section)`
  > div {
    display: flex;
  }
`;

const SectionHalf = styled.div`
  max-width: 50%;
  display: block;
  min-height: 100%;
  display: flex;
  align-items: center;
`;

const SectionText = styled.div`
  color: #676d73;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const StoreLogo = styled.img`
  height: 40px;
  width: auto;
  display: inline-block;

  margin-right: 1rem;
`;

const SectionTitle = styled.div`
  margin-bottom: 1rem;
`;
const aboutThumbtackSection = () => (
  <StyledSection hasBorder padding={false}>
    <SectionHalf>
      <div>
        <SectionTitle>
          <h2>
            When you need to hire someone – a landscaper, a DJ, anyone – Thumbtack finds them for
            you for free.
          </h2>
        </SectionTitle>
        <SectionText>
          <p>See price estimates, read reviews and chat with pros, all in the app.</p>
        </SectionText>
        <a href="https://thumbtack.app.link/ojSIXPWmNG?redirect_url=https%3A%2F%2Fwww.thumbtack.com">
          <StoreLogo
            src="https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/about-carousel/images/app-store@2x.c72f6bf4767f2af39162ae116f4cd292.png"
            alt="Apple App Store"
          />
        </a>
        <a href="https://thumbtack.app.link/4mYrX5qiNG?redirect_url=https%3A%2F%2Fwww.thumbtack.com">
          <StoreLogo
            src="https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/about-carousel/images/google-play@2x.2790171952947f1d18533f601faa9f57.png"
            alt="Google Play Store"
          />
        </a>
      </div>
    </SectionHalf>
    <SectionHalf>
      <img
        src="https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/about-carousel/images/phone-desktop.bd6bc831d2488f15af8cc8dbde83271b.jpg"
        alt="Phone with app"
      />
    </SectionHalf>
  </StyledSection>
);

export default aboutThumbtackSection;
