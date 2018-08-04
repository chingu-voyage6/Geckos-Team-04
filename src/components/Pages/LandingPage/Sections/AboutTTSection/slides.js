import React from 'react';
import styled from 'styled-components';
import { DefaultButton } from '../../../../Shared/UI/Button/Button';

const SectionText = styled.div`
  color: #676d73;
  font-size: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 701px) {
    margin-bottom: 2rem;
  }
`;

const StoreLogo = styled.img`
  height: 40px;
  width: auto;
  display: inline-block;
  margin-right: 1rem;
`;
const ConentWrapper = styled.div`
  padding: 1rem 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 280px;
  @media (min-width: 701px) {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
  }
`;
const SectionTitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 14px;
  font-weight: bold;
  @media (min-width: 701px) {
    font-size: 16px;
    margin-bottom: 1rem;
  }
`;

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  min-height: 500px;
  bottom: 0;
  background: url('${({ mobileUrl }) => mobileUrl}');
  
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;

  @media (min-width: 701px){
    height: 500px;
    background: url('${({ desktopUrl }) => desktopUrl}');
    background-position-x: 100%;
  background-position-y: center;
  background-size: contain;
  background-repeat: no-repeat;
  }
`;

const Button = DefaultButton.extend`
  width: 140px;
  margin-top: 0;
  @media (min-width: 701px) {
    margin-top: -1rem;
`;
export const Slide1 = () => (
  <Slide
    desktopUrl="https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/about-carousel/images/phone-desktop.bd6bc831d2488f15af8cc8dbde83271b.jpg"
    mobileUrl="https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/about-carousel-images/phone-mobile.7d3fc05738f4d835852e5b53c3ed7068.jpg"
  >
    <ConentWrapper>
      <SectionTitle>
        <h2>
          When you need to hire someone – a landscaper, a DJ, anyone – Thumbtack finds them for you
          for free.
        </h2>
      </SectionTitle>
      <SectionText>
        <p>See price estimates, read reviews and chat with pros, all in the app.</p>
      </SectionText>
      <div>
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
    </ConentWrapper>
  </Slide>
);

export const Slide2 = () => (
  <Slide
    desktopUrl="https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/about-carousel-images/gardener-desktop.ec7d32f111419c25b1140c61e3cbbe02.jpg"
    mobileUrl="https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/about-carousel-images/gardener-mobile.0a70af3d0689b9c96b262f58de35ffac.jpg"
  >
    <ConentWrapper>
      <SectionTitle>
        <h2>Wait, what’s a pro?</h2>
      </SectionTitle>
      <SectionText>
        <p>
          Thumbtack pros are local business owners right in your community. They’re the neighbors
          you just haven’t met yet, with the skills you need to get the job done.
        </p>
      </SectionText>
      <Button>Learn more</Button>
    </ConentWrapper>
  </Slide>
);

export const Slide3 = () => (
  <Slide
    desktopUrl="https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/about-carousel-images/paintbrush-desktop.ae1a3ad38a21727241aa26c91ec08310.jpg"
    mobileUrl="https://static.thumbtackstatic.com/fe-assets/pages/homepage/subcomponents/about-carousel-images/paintbrush-mobile.2c4a6e28d6f4a1d2a2b2895da64ada51.jpg"
  >
    <ConentWrapper>
      <SectionTitle>
        <h2>Rest easy. Your property’s protected.</h2>
      </SectionTitle>
      <SectionText>
        <p>
          When you hire a pro on Thumbtack, your property is protected against damage up to $1
          million by the Thumbtack Guarantee.
        </p>
      </SectionText>
      <Button>Learn more</Button>
    </ConentWrapper>
  </Slide>
);
