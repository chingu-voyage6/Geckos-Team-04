import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Section from '../../../Layout/Section/Section';

const stepsContent = [
  {
    id: 1,
    imgUrl:
      'https://static.thumbtackstatic.com/_assets/images/release/modules/how-thumbtack-works/images/estimates.image.4df8109523f34a9c87ca5e5fbd347342.svg',
    title: 'Answer a few questions',
    text: 'Tell us what you need so we can bring you the right pros.',
  },
  {
    id: 2,
    imgUrl:
      'https://static.thumbtackstatic.com/_assets/images/release/modules/how-thumbtack-works/images/compare.image.d6667a9e41f6d7d2ba9c5bc7e3d4d747.svg',
    title: 'Get quotes',
    text: 'Receive quotes from pros who meet your needs.',
  },
  {
    id: 3,
    imgUrl:
      'https://static.thumbtackstatic.com/_assets/images/release/modules/how-thumbtack-works/images/hire.image.4165884630930da67f128f1c9126fd6d.svg',
    title: 'Hire the right pro',
    text: 'Compare quotes, message pros, and hire when ready.',
  },
];

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const HowTTWorksSteps = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1026px) {
    flex-direction: row;
  }
`;

const StyledStep = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 3rem;

  @media (min-width: 1026px) {
    width: 33.3%;
    padding: 1rem;
  }
  > img {
    width: 80%;
    height: 150px;
    display: inline-block;
    margin-bottom: 1rem;
  }

  > p {
    font-size: 0.9rem;
  }
`;

const HowTTWorksStep = ({ imgUrl, title, text }) => (
  <StyledStep>
    <img src={imgUrl} alt="How it works ilustration" />
    <h4>{title}</h4>
    <p>{text}</p>
  </StyledStep>
);

HowTTWorksStep.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const howTTWorksSection = ({ hasBorder }) => (
  <Section hasBorder={hasBorder}>
    <SectionTitle>
      <h3>How Thumbtack works</h3>
    </SectionTitle>
    <HowTTWorksSteps>
      {stepsContent.map(step => <HowTTWorksStep key={step.id} {...step} />)}
    </HowTTWorksSteps>
  </Section>
);
howTTWorksSection.propTypes = {
  hasBorder: PropTypes.bool,
};

howTTWorksSection.defaultProps = {
  hasBorder: false,
};

export default howTTWorksSection;
