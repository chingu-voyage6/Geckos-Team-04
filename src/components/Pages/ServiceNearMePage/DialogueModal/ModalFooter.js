import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DefaultButton } from '../../../Shared/UI/Button/Button';

const FooterBody = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: ${({ isBlue }) => (isBlue ? '#009fd9' : '#fff')};
  border-top: 1px solid ${({ isBlue }) => (isBlue ? '#009fd9' : '#e9eced')};
`;

const ButtonWhite = DefaultButton.extend`
  background-color: #ffffff;
  color: black;
  min-width: 50%;
  flex-grow: 1;
  width: auto;
  :focus {
    background-color: #ffffff;
    color: black;
    text-decoration: underline;
  }

  @media (min-width: 701px) {
    flex-grow: 0;
  }
`;

const ButtonGray = DefaultButton.extend`
  border: 2px solid #d3d4d5;
  color: #676d73;
  background-color: #fff;
  margin-right: 20px;
  min-width: 25%;
  width: auto;
  flex-grow: 1;
  :focus {
    border-color: #2f3033;
    background: #fff;
  }
  @media (min-width: 701px) {
    flex-grow: 0;
  }
`;

const ButtonBlue = DefaultButton.extend`
  min-width: 25%;
  width: auto;
  flex-grow: 1;
  border: 2px solid #009fd9;
  @media (min-width: 701px) {
    flex-grow: 0;
  }
`;

const ModalFooter = ({ option, answers, nextSlide, previousSlide, submitAnswers, isBlue }) => (
  <FooterBody isBlue={isBlue}>
    {(() => {
      switch (option) {
        case 'backAndSkip':
          return (
            <Fragment>
              <ButtonGray onClick={previousSlide}>Back</ButtonGray>
              <ButtonBlue onClick={nextSlide}>{answers ? 'Next' : 'Skip'}</ButtonBlue>
            </Fragment>
          );

        case 'backAndNext':
          return (
            <Fragment>
              <ButtonGray onClick={previousSlide}>Back</ButtonGray>
              <ButtonBlue type="submit" onClick={nextSlide}>
                Next
              </ButtonBlue>
            </Fragment>
          );
        case 'submit':
          return (
            <Fragment>
              <ButtonGray onClick={previousSlide}>Back</ButtonGray>
              <ButtonBlue onClick={submitAnswers}>Submit</ButtonBlue>
            </Fragment>
          );
        case 'next':
          return <ButtonWhite onClick={nextSlide}>Next</ButtonWhite>;

        default:
          return null;
      }
    })()}
  </FooterBody>
);

ModalFooter.propTypes = {
  option: PropTypes.string.isRequired,
  isBlue: PropTypes.bool.isRequired,
  nextSlide: PropTypes.func.isRequired,
  previousSlide: PropTypes.func.isRequired,
  submitAnswers: PropTypes.func.isRequired,
};

export default ModalFooter;
