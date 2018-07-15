import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout/Layout';

const ChooseAccount = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
`;
const ChooseAccountWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 482px) {
    max-width: 449px;
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 701px) {
    max-width: 668px;
  }
  > h2 {
    margin-bottom: 48px;
    text-align: center;
    @media (min-width: 701px) {
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
    }
  }
`;
const InnerWrapper = styled.div`
  display: flex;
`;
const LeftBox = styled.div`
  border: 1px solid #e9eced;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  background-position: 50%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-image: url(https://static.thumbtackstatic.com/_assets/images/release/pages/choose-account/images/cta-bg.13ec385980b40b2756ef995707ace920.jpg);
  @media (max-width: 701px) {
    display: block;
  }
  > div {
    flex: 1;
    color: #ffffff;
    fill: #ffffff;
    > h4 {
      line-height: 1.2;
      margin-bottom: 8px;
      font-size: 20px;
      font-weight: 700;
    }
    > p {
      margin: 0 0 48px 0;
    }
  }
  > a {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    font-family: inherit;
    cursor: pointer;
    margin: 0;
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
    padding: 12px 22px;
    overflow: visible;
    background-color: #009fd9;
    border: 2px solid transparent;
    color: #fff;
    text-decoration: none;
  }
`;
const RightBox = styled.div`
  border: 1px solid #e9eced;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  background-position: 50%;
  flex: 1;
  display: flex;
  flex-direction: column;
  > div {
    flex: 1;
    > h4 {
      line-height: 1.2;
      margin-bottom: 8px;
      font-size: 20px;
      font-weight: 700;
    }
    > p {
      margin: 0 0 48px 0;
    }
  }
  > a {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    font-family: inherit;
    cursor: pointer;
    margin: 0;
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
    padding: 12px 22px;
    overflow: visible;
    background-color: #009fd9;
    border: 2px solid transparent;
    color: #fff;
    text-decoration: none;
  }
`;
const CenterOr = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 48px;
  color: #676d73;
`;
const LoginHero = styled.div`
  background: #fafafa;
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
  > div {
    margin: 0 auto 0 auto;
    width: 100%;
    @media (min-width: 701px) {
      max-width: 668px;
    }
    @media (min-width: 482px) {
      max-width: 449px;
      padding-left: 0;
      padding-right: 0;
    }
    > h2 {
      margin-bottom: 24px;
      font-size: 24px;
      line-height: 28px;
      font-weight: 700;
      @media (min-width: 701px) {
        font-size: 32px;
        line-height: 40px;
        font-weight: 700;
      }
    }
    > a {
      margin: 32px 0 0 0;
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      white-space: nowrap;
      font-family: inherit;
      cursor: pointer;
      margin: 0;
      line-height: 24px;
      font-size: 16px;
      font-weight: 700;
      user-select: none;
      border-radius: 4px;
      padding: 12px 22px;
      overflow: visible;
      background-color: #009fd9;
      color: #fff;
      text-decoration: none;
    }
  }
`;
const chooseAccount = () => (
  <Layout footerIsVisible>
    <ChooseAccount>
      <ChooseAccountWrapper>
        <h2>Sign up on Thumbtack</h2>
        <InnerWrapper>
          <LeftBox>
            <div>
              <h4>I want to grow my business</h4>
              <p>Respond to customer requests and get hired</p>
            </div>
            <a href="/join-pro">Join As a Pro</a>
          </LeftBox>
          <CenterOr>or</CenterOr>
          <RightBox>
            <div>
              <h4>I want to hire professionals</h4>
              <p>Get introduced to the right pros for your projects</p>
            </div>
            <a href="/hire">Sign Up To Hire</a>
          </RightBox>
        </InnerWrapper>
      </ChooseAccountWrapper>
      <LoginHero>
        <div>
          <h2>Already have an account?</h2>
          <a href="/login">Log in</a>
        </div>
      </LoginHero>
    </ChooseAccount>
  </Layout>
);

export default chooseAccount;
