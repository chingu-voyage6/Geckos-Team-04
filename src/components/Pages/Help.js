import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout/Layout';
import Section from '../Layout/Section/Section';

const HelpSection = styled.div`
  max-width: 1025px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
`;
const TopNav = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  > h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin: 1rem 0;
  }
`;
const TabHolder = styled.div`
  box-sizing: inherit;
`;
const Tab = styled.div`
  display: inline-block;
  box-sizing: inherit;
  display: flex;
  justify-content: center;
`;
const TabLink = styled.div`
  cursor: pointer;
  margin-top: 0.2rem;
  padding: 0.5rem 1.25rem;
  border-bottom: 4px solid #e9eced;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  box-sizing: inherit;
  }
  :hover {
    color: #009fd9;
  }
`;
const ContactSection = styled.div`
  text-align: center;
  > h2 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin: 1rem 0;
  }
  span {
    > a {
      color: #009fd9;
      fill: #009fd9;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;
class Help extends React.Component {
  render() {
    return (
      <Layout footerIsVisible>
        <HelpSection>
          <TopNav>
            <h1>Browse topics for:</h1>
            <TabHolder>
              <Tab>
                <TabLink>Pros</TabLink>
                <TabLink>Customers</TabLink>
              </Tab>
            </TabHolder>
          </TopNav>
        </HelpSection>
        <Section isGray>
          <ContactSection>
            <h2>Need more help?</h2>
            <span>
              <a href="/support">Contact Thumbtack Support</a>
            </span>
          </ContactSection>
        </Section>
      </Layout>
    );
  }
}

export default Help;
