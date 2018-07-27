import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MultiChoiceGroup from './FormOptions/MultiChoiceGroup';
import SingleChoiceGroup from './FormOptions/SingleChoiceGroup';
import IntroModal from './IntroModal';
import ModalContentStyledWrappers from './ModalContentStyledWrappers';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }

  50% {
    opacity: .5;
    transform: translateX(0px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;
const ContentWrapper = styled.div`
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
  flex-grow: 1;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
`;
const TransitionWrapper = styled.div`
  position: absolute;
  top: 0;
  width: calc(100% - 32px);
  will-change: transform, opacity;

  transform-style: preserve-3d;

  opacity: 1;
  transform: translateX(0px);
  &.modal-appear {
    transform: translateX(50px);
  }
  &.modal-appear-active {
    animation: ${fadeIn} 1s linear;
    opacity: 1;
    transform: translateX(0px);
  }
  &.modal-enter {
    transform: translateX(50px);
  }
  &.modal-enter-active {
    animation: ${fadeIn} 1s linear;
    opacity: 1;
    transform: translateX(0px);
  }

  &.modal-enter-done {
    opacity: 1;
    transform: translateX(0px);
  }

  &.modal-exit {
    opacity: 0;
    transition: opacity 10ms;
  }
  &.modal-exit-active {
    opacity: 0;
  }
`;

class ModalContent extends React.Component {
  renderSwitch = (param, options, updateValue, question, professionalsToFind, answers) => {
    switch (param) {
      case 'single':
        return (
          <CSSTransition
            classNames="modal"
            in
            mountOnEnter
            key={question}
            unmountOnExit
            timeout={{
              enter: 1000,
              exit: 10,
            }}
          >
            <TransitionWrapper className="modal">
              <ModalContentStyledWrappers key={question} question={question}>
                <SingleChoiceGroup
                  answers={answers}
                  options={options}
                  updateValue={updateValue}
                  question={question}
                />
              </ModalContentStyledWrappers>
            </TransitionWrapper>
          </CSSTransition>
        );
      case 'multi':
        return (
          <CSSTransition
            classNames="modal"
            in
            mountOnEnter
            unmountOnExit
            key={question}
            timeout={{
              enter: 1000,
              exit: 10,
            }}
          >
            <TransitionWrapper className="modal">
              <ModalContentStyledWrappers question={question}>
                <MultiChoiceGroup
                  answers={answers}
                  options={options}
                  updateValue={updateValue}
                  question={question}
                />
              </ModalContentStyledWrappers>
            </TransitionWrapper>
          </CSSTransition>
        );
      case 'intro':
        return (
          <CSSTransition
            classNames="modal"
            in
            appear
            key={professionalsToFind}
            unmountOnExit
            timeout={{
              enter: 1000,
              exit: 10,
            }}
          >
            <TransitionWrapper className="modal">
              <IntroModal className="modal" professionalsToFind={professionalsToFind} />
            </TransitionWrapper>
          </CSSTransition>
        );
              case 'zipCode':
                return (
                  <CSSTransition
                    classNames="modal"
                    in
                    appear
                    unmountOnExit
                    key={question}
                    timeout={{
                      enter: 1000,
                      exit: 10,
                    }}
                  >
                    <TransitionWrapper className="modal">
                      <ModalContentStyledWrappers question={question}>
                        <TextInputTypesModal
                          inputType="zipCode"
                          value={answers}
                          updateValue={updateValue}
                          question={question}
                          updateTextFieldValue={updateTextFieldValue}
                        />
                      </ModalContentStyledWrappers>
                    </TransitionWrapper>
                  </CSSTransition>
                );
              case 'name':
                return (
                  <CSSTransition
                    classNames="modal"
                    in
                    appear
                    unmountOnExit
                    key={question}
                    timeout={{
                      enter: 1000,
                      exit: 10,
                    }}
                  >
                    <TransitionWrapper className="modal">
                      <ModalContentStyledWrappers question={question}>
                        <TextInputTypesModal
                          inputType="name"
                          value={answers}
                          updateValue={updateValue}
                          question={question}
                          updateTextFieldValue={updateTextFieldValue}
                        />
                      </ModalContentStyledWrappers>
                    </TransitionWrapper>
                  </CSSTransition>
                );
              case 'email':
                return (
                  <CSSTransition
                    classNames="modal"
                    in
                    appear
                    unmountOnExit
                    key={question}
                    timeout={{
                      enter: 1000,
                      exit: 10,
                    }}
                  >
                    <TransitionWrapper className="modal">
                      <ModalContentStyledWrappers question={question}>
                        <TextInputTypesModal
                          inputType="email"
                          value={answers}
                          updateValue={updateValue}
                          question={question}
                          updateTextFieldValue={updateTextFieldValue}
                        />
                      </ModalContentStyledWrappers>
                    </TransitionWrapper>
                  </CSSTransition>
                );
              case 'textarea':
                return (
                  <CSSTransition
                    classNames="modal"
                    in
                    appear
                    unmountOnExit
                    key={question}
                    timeout={{
                      enter: 1000,
                      exit: 10,
                    }}
                  >
                    <TransitionWrapper className="modal">
                      <ModalContentStyledWrappers question={question}>
                        <TextInputTypesModal
                          inputType="textarea"
                          value={answers}
                          updateValue={updateValue}
                          question={question}
                          updateTextFieldValue={updateTextFieldValue}
                        />
                      </ModalContentStyledWrappers>
                    </TransitionWrapper>
                  </CSSTransition>
                );
      default:
        return null;
    }
          })()}
        </TransitionGroup>
      </ContentWrapper>
    );
  }
}

ModalContent.propTypes = {
  type: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  updateValue: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  professionalsToFind: PropTypes.string.isRequired,
  answers: PropTypes.oneOfType([PropTypes.array, undefined, PropTypes.string]).isRequired,
};

export default ModalContent;
