import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout/Layout';

const LoginHolder = styled.div`
  margin: 0 auto 0 auto;
  @media (min-width: 482px) {
    max-width: 449px;
  }

  @media (min-width: 701px) {
    max-width: 668px;
  }

  @media (min-width: 1026px) {
    max-width: 946px;
  }
  > h1 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    text-align: center;
    margin-top: 34px;
    margin-bottom: 24px;
  }
  > form {
    background-color: #fff;
    border: 1px solid #e9eced;
    border-radius: 4px;
    padding: 32px 72px 40px;
    margin-bottom: 40px;
    margin: auto;
    > input {
      width: 100%;
      background-color: #fff;
      border: 1px solid #d3d4d5;
      border-radius: 4px;
      padding: 13px 15px;
      font-size: 16px;
      vertical-align: middle;
      line-height: 24px;
      margin: 0 0 5px;
    }
    > label {
      display: block;
      margin: 4px 0 4px 0;
      font-weight: 700;
    }
    > p {
      text-align: center;
      margin-top: 16px;
      font-size: 12px;
      line-height: 18px;
    }
    > button {
      width: 100%;
      text-align: center;
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      white-space: nowrap;
      cursor: pointer;
      margin: 0;
      line-height: 24px;
      font-size: 16px;
      font-weight: 700;
      margin: 10px 0 0 0;
      user-select: none;
      border-radius: 4px;
      padding: 12px 22px;
      overflow: visible;
      background-color: #009fd9;
      border: 2px solid transparent;
      color: #fff;
    }
  }
`;
const Form = () => (
  <LoginHolder>
    <h1>Welcome back</h1>
    <form method="POST">
      <label htmlFor="email">Email address</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <button type="submit">Log in</button>
      <p>
        By clicking Log In, Log In with Facebook or Log In with Google, you agree to the{' '}
        <a href="/..">Terms of Use</a> and <a href="/..">Privacy Policy</a>
      </p>
    </form>
  </LoginHolder>
);

const Login = () => (
  <Layout footerIsVisible={false} defaultCopyright={false}>
    <Form />
  </Layout>
);

export default Login;
