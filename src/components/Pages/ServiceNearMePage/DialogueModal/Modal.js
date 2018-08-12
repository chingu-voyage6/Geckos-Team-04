import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Backdrop } from './Backdrop';
import CancelRequest from './CancelRequest';
import ErrorPrompt from './ErrorPrompt';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import { serviceQuestions as questionnaire } from './Questionnaires/index';

const ModalBody = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 20px);
  background: ${({ isBlue }) => (isBlue ? '#009fd9' : '#fafafa')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 1100;
  min-width: 100%;
  @media (min-width: 601px) {
    min-width: 600px;
    width: 600px;
  }

  @media (min-width: 701px) {
    height: 70vh;
  }
`;

class Modal extends React.Component {
  state = {
    currentSlide: 0,
    currentType: null,
    answers: {},
    validation: null,
    displayError: false,
    serviceQuestions: {},
  };

  componentWillMount() {
    window.onscroll = function() {
      window.scrollTo(0, 0);
    };
  }

  componentDidMount() {
    const { whichService } = this.props;
    const validation = {};
    const { currentSlide } = this.state;
    const currentType = questionnaire[whichService][currentSlide].type;
    const answerKeys = questionnaire[whichService]
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
      serviceQuestions: questionnaire[whichService],
      currentType,
    });
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  updateTextFieldValueHandler = (question, e) => {
    const newInputValue = e.target.value;
    const { serviceQuestions } = this.state;
    const { answers, displayError, currentSlide, validation } = this.state;
    const { validation: typeOfSlideValidation } = serviceQuestions[currentSlide];

    const isInputValid = this.validateTextInputs(newInputValue, typeOfSlideValidation);

    answers[question] = newInputValue;

    if (displayError && isInputValid) {
      const questionAnswerValid = {
        [question]: {
          isValid: true,
        },
      };
      this.setState({
        displayError: false,
        validation: { ...validation, ...questionAnswerValid },
        answers,
      });
    } else {
      const questionAnswerValid = {
        [question]: {
          isValid: false,
        },
      };
      this.setState({
        answers,
        validation: { ...validation, ...questionAnswerValid },
      });
    }

    this.setState({
      answers,
    });
  };

  validateTextInputs = (input, validationType) => {
    switch (validationType) {
      case 'zipcode':
        return this.validateZipCode(input);

      case 'name':
        return this.validateName(input);

      case 'email':
        return this.validateEmail(input);

      default:
        return false;
    }
  };

  validateZipCode = zipCode => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);

  validateEmail = email =>
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

  validateName = name => name.trim().length >= 5;

  updateValueHandler = ([question, answer]) => {
    const { answers, currentType, validation } = this.state;
    const updatedAnswers = answers ? { ...answers } : {};

    if (currentType !== 'multi') {
      updatedAnswers[question] = answer;
    } else {
      const answerList = updatedAnswers[question] ? [...updatedAnswers[question]] : [];

      if (answerList.includes(answer)) {
        updatedAnswers[question] = answerList.filter(a => a !== answer);
      } else {
        updatedAnswers[question] = [...answerList, answer];
      }
    }
    const updatedValidation = {
      [question]: {
        isValid: true,
        wasTouched: true,
      },
    };

    this.setState({
      answers: {
        ...updatedAnswers,
      },
      validation: { ...validation, ...updatedValidation },
      displayError: false,
    });
  };

  submitAnswers = () => {
    // const { answers } = this.state;
  };

  nextSlide = e => {
    e.preventDefault();
    const { currentSlide, currentType, validation, answers, serviceQuestions } = this.state;
    const { validation: typeOfSlideValidation } = serviceQuestions[currentSlide];

    if (currentType === 'intro' || typeOfSlideValidation === '') {
      this.setState(prevState => ({
        currentSlide: prevState.currentSlide + 1,
        currentType: serviceQuestions[prevState.currentSlide + 1].type,
      }));
      return;
    }
    const currentQuestion = serviceQuestions[currentSlide].question;

    let { isValid } = validation[currentQuestion];

    if (['name', 'email', 'zipcode'].includes(typeOfSlideValidation)) {
      isValid = this.validateTextInputs(answers[currentQuestion], typeOfSlideValidation);
    }

    if (isValid) {
      this.setState(prevState => ({
        currentSlide: prevState.currentSlide + 1,
        currentType: serviceQuestions[prevState.currentSlide + 1].type,
        displayError: false,
      }));
    } else {
      this.setState({ displayError: true });
    }
  };

  previousSlide = e => {
    e.preventDefault();
    this.setState(prevState => ({
      currentSlide: prevState.currentSlide - 1,
      currentType: prevState.serviceQuestions[prevState.currentSlide - 1].type,
      displayError: false,
    }));
  };

  render() {
    const { closeModal, showCloseRequest, continueRequest, showCancelRequest } = this.props;
    const { currentSlide, answers, displayError, serviceQuestions } = this.state;
    const { type, question, options, professionalsToFind, nextButtons, validationMessage } =
      serviceQuestions[currentSlide] || {};
    return (
      <Fragment>
        <form>
          <ModalBody isBlue={type === 'intro'}>
            <ModalHeader isBlue={type === 'intro'} showCancelRequest={showCancelRequest} />
            <ModalContent
              answers={answers[question]}
              type={type}
              question={question}
              options={options}
              updateValue={this.updateValueHandler}
              professionalsToFind={professionalsToFind}
              updateTextFieldValue={this.updateTextFieldValueHandler}
            />
            {displayError ? <ErrorPrompt validationMessage={validationMessage} /> : null}
            <ModalFooter
              validationMessage={validationMessage}
              displayError={displayError}
              nextSlide={this.nextSlide}
              previousSlide={this.previousSlide}
              submitAnswers={this.submitAnswers}
              option={nextButtons}
              answers={answers[question]}
              isBlue={type === 'intro'}
            />
            {showCloseRequest ? (
              <CancelRequest
                percent={15}
                cancelRequest={closeModal}
                continueRequest={continueRequest}
              />
            ) : null}
          </ModalBody>
        </form>
        <Backdrop />
      </Fragment>
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
