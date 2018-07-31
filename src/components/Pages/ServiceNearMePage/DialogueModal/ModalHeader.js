import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CloseIcon } from '../../../Shared/Icon/Icon';

const ModalClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #e9eced;
`;
const HeaderBody = styled.div`
  height: 60px;
  background-color: ${({ isBlue }) => (isBlue ? '#009fd9;' : '#fafafa')};
`;

const ModalHeader = ({ showCancelRequest, isBlue }) => (
  <HeaderBody isBlue={isBlue}>
    <ModalClose onClick={showCancelRequest}>
      <CloseIcon size="28" />
    </ModalClose>
  </HeaderBody>
);

ModalHeader.propTypes = {
  showCancelRequest: PropTypes.func.isRequired,
};

export default ModalHeader;
