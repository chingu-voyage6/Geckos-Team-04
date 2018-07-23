import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Body = styled.div`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  width: 100%;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  z-index: 10000;
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
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
  <BodyWrapper>
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
);

CancelRequest.propTypes = {
  percent: PropTypes.string.isRequired,
  continueRequest: PropTypes.func.isRequired,
  cancelRequest: PropTypes.func.isRequired,
};

export default CancelRequest;
