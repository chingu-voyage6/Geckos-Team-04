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
