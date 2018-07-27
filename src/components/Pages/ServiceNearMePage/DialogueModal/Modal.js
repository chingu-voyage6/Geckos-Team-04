import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BackDrop } from './Backdrop';

import CancelRequest from './CancelRequest';
import ErrorPrompt from './ErrorPrompt';
import { questionaire } from './questionaire-data';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';

const ModalBody = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 80vh;
  background: ${({ isBlue }) => (isBlue ? '#009fd9' : '#fafafa')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
`;

class Modal extends React.Component {
  state = {
    currentSlide: 0,
    currentType: questionaire[0].type || null,
  componentDidMount() {
    const validation = {};
    const answerKeys = questionaire
      .filter(q => Object.prototype.hasOwnProperty.call(q, 'question'))
      .reduce((acc, curr) => {
        acc[curr.question] = null;
        validation[curr.question] = {
          isValid: false,
        };
        return acc;
      }, {});
    this.setState({
      answers: answerKeys,
      validation,
    });
  }

        'Laundry',
      ],
    },
  };

  updateErrorDisplay = (input, validationType) => {
    let promptDisplayed;

    switch (validationType) {
      case 'zipcode':
        promptDisplayed = this.validateZipCode(input);
        break;
      case 'name':
        promptDisplayed = this.validateName(input);
        break;
      case 'email':
        promptDisplayed = this.validateEmail(input);
        break;
      default:
        promptDisplayed = false;
        break;
    }

    const { answers, currentType } = this.state;
    const updatedAnswers = { ...answers };
    if (currentType !== 'multi') {
      updatedAnswers[question] = answer;
    } else {
      const answerList = [...updatedAnswers[question]];

      if (answerList.includes(answer)) {
        updatedAnswers[question] = answerList.filter(a => a !== answer);
      } else {
        updatedAnswers[question].push(answer);
      }
    }

    this.setState({
      answers: {
        ...updatedAnswers,
      },
    });
  };

  submitAnswers = () => {
    const { answers } = this.state;
    console.table(answers);
  };

  nextSlide = () => {
    this.setState(prevState => ({
      currentSlide: prevState.currentSlide + 1,
      currentType: questionaire[prevState.currentSlide + 1].type,
    }));
  };

  previousSlide = () => {
    this.setState(prevState => ({
      currentSlide: prevState.currentSlide - 1,
      currentType: questionaire[prevState.currentSlide - 1].type,
    }));
  };

  validateZipCode = zipCode => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);

  validateEmail = email =>
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

  validateName = name => name.trim().length >= 5;

  render() {
    const { closeModal, showCloseRequest, continueRequest, showCancelRequest } = this.props;
    const { currentSlide, answers, displayError } = this.state;
    const {
      type,
      question,
      options,
      professionalsToFind,
      nextButtons,
      validationMessage,
    } = questionaire[currentSlide];
    return (
      <BackDrop>
        <ModalBody isBlue={type === 'intro'}>
          {showCloseRequest ? (
            <CancelRequest cancelRequest={closeModal} continueRequest={continueRequest} />
          ) : null}
          <ModalHeader isBlue={type === 'intro'} showCancelRequest={showCancelRequest} />
          <ModalContent
            answers={answers[question]}
            type={type}
            question={question}
            options={options}
            updateValue={this.updateValueHandler}
            professionalsToFind={professionalsToFind}
          />
            {displayError ? <ErrorPrompt validationMessage={validationMessage} /> : null}
          <ModalFooter
            nextSlide={this.nextSlide}
            previousSlide={this.previousSlide}
            submitAnswers={this.submitAnswers}
            option={nextButtons}
            isBlue={type === 'intro'}
          />
        </ModalBody>
      </BackDrop>
    );
  }
}
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  continueRequest: PropTypes.func.isRequired,
  showCloseRequest: PropTypes.bool.isRequired,
  showCancelRequest: PropTypes.func.isRequired,
};

export default Modal;
