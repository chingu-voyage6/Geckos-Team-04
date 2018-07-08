import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DefaultButton } from '../../../Shared/UI/Button/Button';
import Section from '../../../Layout/Section/Section';

/* <div class="pro-upsell__image" style="background-image:url(https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/pro-upsell/pro-upsell-illustration.d37ba3a3bd2d29038bded72ec4d5e0d7.png)" alt="Pro Upsell Illustation"></div> */

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

const StyledImage = styled.img`
  transform: scale(1.2);
`;

const SectionText = styled.div`
  color: #676d73;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.div`
  margin-bottom: 1rem;
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
      <div>
        <SectionTitle>
          <h2>Open for business.</h2>
        </SectionTitle>
        <SectionText>
          <p>Whatever work you do, we'll find you the jobs you want.</p>
        </SectionText>
        <DefaultButton>Become a Thumbtack pro</DefaultButton>
      </div>
    </SectionHalf>
  </StyledSection>
);

export default openForBusinessSection;

// <div style="background-image:url(https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/about-carousel/images/phone-desktop.bd6bc831d2488f15af8cc8dbde83271b.jpg)" class="large-image-card__image large-image-card__image--desktop"><div class="large-image-card__content"><div><div class="tp-title-3 tp-margin-bottom--double">When you need to hire someone – a landscaper, a DJ, anyone – Thumbtack finds them for you for free.</div><div class="tp-color--black-300"><p class="tp-margin-bottom--double">See price estimates, read reviews and chat with pros, all in the app.</p><div><a class="tp-margin-right--double" href="https://thumbtack.app.link/ojSIXPWmNG?redirect_url=https%3A%2F%2Fwww.thumbtack.com" target="_blank" rel="noopener noreferrer"><img src="https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/about-carousel/images/app-store@2x.c72f6bf4767f2af39162ae116f4cd292.png" height="40" alt="Apple App Store logo"></a><a href="https://thumbtack.app.link/4mYrX5qiNG?redirect_url=https%3A%2F%2Fwww.thumbtack.com" target="_blank" rel="noopener noreferrer"><img src="https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/about-carousel/images/google-play@2x.2790171952947f1d18533f601faa9f57.png" height="40" alt="Google Play Store logo"></a></div></div></div></div></div>
