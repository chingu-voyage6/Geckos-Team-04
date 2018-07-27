import React from 'react';
import styled from 'styled-components';
import Header from '../../Layout/Header/Header';
import { ListGroup, ButtonArrowLink } from '../../Shared/Misc';

const Wrapper = styled.div`
  display: block;
`;

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fafafa;
`;

const ColumnLeft = styled.div`
  flex-grow: 0;
  flex-basis: 300px;
  border-right: 1px solid #eee;
  @media (max-width: 767px) {
    display: none;
  }
`;

const ColumnRight = styled.div`
  flex-grow: 1;
  padding: 0 20px 0 20px;
`;

const Title = styled.h3`
  color: #2f3033;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  padding: 16px 20px 12px 20px;
  letter-spacing: 0.02em;
  transition: opacity 0.5s;
`;

const TitleMuted = styled.h4`
  font-size: 12px;
  line-height: 18px;
  font-weight: 1;
  text-transform: uppercase;
  color: #686f74;
  padding: 9px 16px;
  letter-spacing: 0.02em;
`;

const AccountSettings = props => (
  <Wrapper>
    <Header {...props} />
    <Section>
      <ColumnLeft>
        <Title>Settings</Title>
        <ListGroup>
          <ButtonArrowLink hasBorderTop to="/profile/information">
            Account
          </ButtonArrowLink>
          <ButtonArrowLink fontWeight="300" hasBorderBottom to="/profile/notifications">
            <span className="isActive">Notifications</span>
          </ButtonArrowLink>
        </ListGroup>
      </ColumnLeft>
      <ColumnRight>
        <Title>Account</Title>
        <ListGroup hasBorder isRounded>
          <ButtonArrowLink fontWeight="300" to="/profile/account_edit">
            <span>Name</span>
          </ButtonArrowLink>
          <ButtonArrowLink fontWeight="300" to="/profile/account_edit">
            <span>Email</span>
          </ButtonArrowLink>
          <ButtonArrowLink fontWeight="300" to="/profile/account_edit">
            <span>Phone Number</span>
          </ButtonArrowLink>
          <ButtonArrowLink fontWeight="300" to="/profile/password">
            <span>Password</span>
          </ButtonArrowLink>
        </ListGroup>
        <TitleMuted>Account Delete</TitleMuted>
        <ListGroup hasBorder isRounded>
          <ButtonArrowLink fontWeight="300" to="profile/delete_account">
            <span>Deactivate account</span>
          </ButtonArrowLink>
        </ListGroup>
      </ColumnRight>
    </Section>
  </Wrapper>
);

export default AccountSettings;
