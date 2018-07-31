import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorBody = styled.div`
  position: absolute;
  display: block;
  padding: 10px;
  color: #ff5a5f;
  width: 100%;
  text-align: center;
  bottom: 65px;
  background-color: rgba(255, 255, 255, 0.7);
`;

const ErrorPrompt = ({ validationMessage }) => <ErrorBody>{validationMessage}</ErrorBody>;

ErrorPrompt.propTypes = {
  validationMessage: PropTypes.string.isRequired,
};

export default ErrorPrompt;
