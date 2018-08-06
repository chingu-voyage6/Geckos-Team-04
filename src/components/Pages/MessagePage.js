import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout/Layout';
import Section from '../Layout/Section/Section';
import { MessageIcon } from '../Shared/Icon/Icon';

const StyledSection = styled(Section)`
  min-height: 100vh;
`;

const Content = styled.div`
  text-align: center;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.div`
  text-align: center;
  margin: 16px 0;
  font-size: 20px;
  font-weight: bold;
  @media (min-width: 1011px) {
    text-align: left;
  }
`;
const IconWrapper = styled.div`
  color: #808285;
`;
const ContentText = styled.div`
  color: rgb(47, 48, 51);
`;
const messagePage = () => (
  <Layout>
    <StyledSection padding={false} isGray>
      <Heading>Messages</Heading>
      <Content>
        <IconWrapper>
          <MessageIcon size="48" />
          <ContentText>Incoming messages will show up here</ContentText>
        </IconWrapper>
      </Content>
    </StyledSection>
  </Layout>
);

export default messagePage;
