import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BackDrop } from './Backdrop';

import CancelRequest from './CancelRequest';
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
    questionaire,
    answers: {
      'How many bedrooms are in your home?': '1 bedroom',
      'Which additional services do you need, if any?': [
        'Fridge cleaning',
        'Oven cleaning',

        'Laundry',
      ],
    },
  };

  updateValueHandler = ([question, answer], e) => {
    console.log(question, answer);

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

  render() {
    const { closeModal, showCloseRequest, continueRequest, showCancelRequest } = this.props;
    const { currentSlide, answers } = this.state;
    const { type, question, options, professionalsToFind, nextButtons } = questionaire[
      currentSlide
    ];
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
