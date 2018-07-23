import React from 'react';
import styled from 'styled-components';
import Icon from '../../../Shared/Icon/Icon';

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  color: #009fd9;
  text-decoration: none;
  margin-bottom: 1em;
`;

const AccountLink = () => (
  <Wrapper href="/profile/information">
    <Icon
      path="M11.49 16a.517.517 0 0 1-.353-.138L3.157 8.37a.496.496 0 0 1 0-.722L11.137.14a.515.515 0 0 1 .721.015c.195.2.188.515-.015.706L4.247 8.01l7.596 7.129c.203.191.21.508.015.707a.515.515 0 0 1-.368.154"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    />
    Account
  </Wrapper>
);

export default AccountLink;
