import React from 'react';
import styled from 'styled-components';
import { CarretIcon as Caret } from '../Icon/Icon';

export const ButtonBody = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 3px;
  z-index: 100;
  display: none;
  :active,
  :focus {
    outline: none;
  }

  @media (min-width: 482px) {
    display: flex;
  }
  @media (min-width: 1011px) {
    background-color: transparent;
  }
`;

const ButtonBodyRight = ButtonBody.extend`
  transform: rotate(180deg) translateY(50%);
  top: 42%;
  @media (min-width: 482px) {
    right: -20px;
  }

  @media (min-width: 1011px) {
    right: -40px;
  }
`;

const ButtonBodyLeft = ButtonBody.extend`
  left: -40px;
  top: 42%;
  transform: translateY(-50%);
  @media (min-width: 482px) {
    left: -20px;
  }

  @media (min-width: 1011px) {
    left: -40px;
  }
`;

export const CaretButtonLeft = ({ click }) => (
  <ButtonBodyRight onClick={() => click()}>
    <Caret size="28" />
  </ButtonBodyRight>
);

export const CaretButtonRight = ({ click }) => (
  <ButtonBodyLeft onClick={() => click()}>
    <Caret size="28" />
  </ButtonBodyLeft>
);
