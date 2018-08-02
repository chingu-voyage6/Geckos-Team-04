import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Section from '../../../Layout/Section/Section';
import { DefaultButton } from '../../../Shared/UI/Button/Button';

const QnAContent = [
  {
    question: 'How much do you pay for house cleaning?',
    answer:
      'Hiring a professional house cleaning service is a helpful way to have a healthy home even when your work and personal schedule is packed. House cleaning prices vary based on how many square feet your home is, how dirty your house gets, and how often the cleaning service comes. Some companies charge a set amount — such as 5 cents — per square foot, with a minimum amount, such as $100. The national average cost for house cleaning ranges between $110 and $150. Prices can be lower in areas with a lower cost of living, higher in big cities or affluent regions. You may save money by increasing the frequency of your house cleaning visits. Often a company will charge you less per cleaning when you schedule more cleanings per month. The cost advantage rewards your loyalty, and also reflects the fact that more frequent cleanings make it easier to maintain a high level of cleanliness in your home. A housecleaning service may charge more for the first visit or for one-time services than for recurring cleanings.',
  },
  {
    question: 'How much does it cost to deep clean a house?',
    answer: `Deep cleaning a house goes beyond the surface level to clear out the dust, grime and gunk that’s collecting on the fan blades, hiding in the blinds, and built up inside the refrigerator drawers. Deep cleaning of a home or apartment costs more than regular house cleaning because it takes more time, effort, and cleaning products. You may choose to have a deep cleaning once or several times a year in addition to your standard cleaning services. You may have a one-time deep cleaning to prepare for company or to clean after a house party. Companies may charge an hourly rate or a price per square foot, or may offer you a flat rate after they have visited your home and estimated work time. The national average house cleaning price is $110-$150, with rates ranging higher for deep-cleaning services. Here are some examples of how a company may calculate their deep-cleaning prices:

      10 cents per square foot (compared with 5 cents per square foot for standard house cleaning).
      $300 for a 3,000-square-foot home.
      $25 per hour per worker for deep-cleaning services.
      `,
  },
  {
    question: 'How much does a move-out cleaning cost?',
    answer:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ',
  },
];
const StyledSection = styled(Section)`
  text-align: center;

  > div {
    padding-bottom: 30px;
  }
`;
const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
const SectionText = styled.div``;

const ContentWrapper = styled.div`
  width: 100%;
  margin: auto;

  @media (min-width: 701px) {
    width: 66.66%;
  }
`;

const QnATitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const ButtonLink = styled(Link)`
  margin: 36px auto;
  font-size: 14px;
  text-decoration: none;
  width: auto;
  color: #fff;
  white-space: nowrap;
  background-color: #009fd9;
  font-weight: bold;
  padding: 14px 24px;
  border-radius: 0.25rem !important; // required to override normalize from footer!
  display: inline-block;
  letter-spacing: 1px;
  :focus {
    text-decoration: underline;
    background-color: #007fad;
  }
`;

const QuestionCardBody = styled.div`
  box-sizing: border-box;

  padding: 30px !important;
  background: #fff;
  border: 1px solid #e9eced;
  border-radius: 4px;
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.16);
  margin-top: 20px;
  text-align: left;
`;
const CardTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;
const AnswerWrapper = styled.div`
  font-size: 14px;
  color: #676d73;
  overflow-y: hidden;
  position: relative;
  line-height: 20px;
  max-height: 60px;
`;

const QuestionCard = ({ question, answer }) => (
  <QuestionCardBody>
    <CardTitle>Q: {question}</CardTitle>
    <AnswerWrapper>
      <p>
        <strong>A:</strong> {answer}
      </p>
    </AnswerWrapper>
  </QuestionCardBody>
);

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
const OtherServices = () => (
  <StyledSection padding={false}>
    <SectionTitle>Unfortunately, we could not find any House Cleaners in your area.</SectionTitle>
    <ContentWrapper>
      <SectionText style={{ color: '#676d73' }}>
        Thumbtack currently has over 200,000 professionals completing projects for customers across
        categories including home, events, lessons, wellness, and more.
      </SectionText>
      <ButtonLink to="/">Explore other services</ButtonLink>

      <QnATitle>Q & A</QnATitle>
      <SectionText>Answers to commonly asked questions from the experts on Thumbtack.</SectionText>
      {QnAContent.map(({ question, answer }, i) => (
        <QuestionCard key={`${i}a`} question={question} answer={answer} />
      ))}
    </ContentWrapper>
  </StyledSection>
);

export default OtherServices;
