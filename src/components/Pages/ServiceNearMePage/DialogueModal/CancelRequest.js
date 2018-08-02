import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Body = styled.div`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  width: 100%;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  z-index: 1300;
`;

const RequestAction = styled.div`
  background-color: white;
  color: ${({ color }) => color};
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  margin-bottom: -2px;
  font-weight: bold;
  cursor: pointer;
`;
const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &.slide-down-appear {
    transform: translate(-45%, -50%);
    opacity: 0;
  }
  &.slide-down-appear-active {
    opacity: 1;
    transform: translate(-50%, -50%);
    transition: transform, opacity 0.2s ease;
  }

  &.slide-down-exit {
    display: none;
  }
  &.slide-down-exit-active {
    display: none;
  }
  &.slide-down-exit-done {
    display: none;
  }
`;

const ActionWrapper = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.div`
  width: 67%;
  margin-bottom: 30px;
  font-size: 25px;

  font-weight: bold;
`;

const CancelRequest = ({ percent, continueRequest, cancelRequest }) => (
  <CSSTransition classNames="slide-down" in appear unmountOnExit timeout={200}>
    <BodyWrapper className="slide-down">
      <Body>
        <TitleWrapper>Don't stop now. You're {percent}% done with your request.</TitleWrapper>
        <ActionWrapper>
          <RequestAction color="#009fd9" onClick={continueRequest}>
            Continue Request
          </RequestAction>
          <RequestAction color="#ff5a5f" onClick={cancelRequest}>
            Cancel Request
          </RequestAction>
        </ActionWrapper>
      </Body>
    </BodyWrapper>
  </CSSTransition>
);

CancelRequest.propTypes = {
  percent: PropTypes.string.isRequired,
  continueRequest: PropTypes.func.isRequired,
  cancelRequest: PropTypes.func.isRequired,
};

export default CancelRequest;
