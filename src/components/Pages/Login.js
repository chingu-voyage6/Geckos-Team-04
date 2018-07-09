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
    @media (max-width: 701px) {
      margin-top: 100px;
    }
  }
  > form {
    background-color: #fff;
    border: 1px solid #e9eced;
    border-radius: 4px;
    padding: 32px 72px 40px;
    margin-bottom: 40px;
    margin: auto;
    @media (max-width: 701px) {
      border: none;
    }
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
    > div {
      display: flex;
      align-items: center;
      font-weight: 400;
      color: #676d73;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    a {
      color: #009fd9;
      fill: #009fd9;
      cursor: pointer;
    }
  }
`;
const LoginElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2px 0;
  > div {
    display: flex;
    align-items: center;
    > input {
      height: 25px;
      width: 25px;
      margin: 0 10px 0 0;
      background: #ffffff;
      border: 2px solid #d3d4d5;
    }
  }
  > a {
    text-decoration: none;
  }
`;
const LoginSeperator = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 400;
  color: #676d73;
  margin-top: 16px;
  margin-bottom: 16px;
  :before {
    content: '';
    display: block;
    flex: 1;
    background: #e9eced;
    height: 1px;
    z-index: 1;
  }
  :after {
    content: '';
    display: block;
    flex: 1;
    background: #e9eced;
    height: 1px;
    z-index: 1;
  }
  > span {
    margin: 0 10px 0 10px;
  }
`;
const FacebookLogin = styled.div`
  display: flex;
  > button {
    width: 100%;
    flex-shrink: 1;
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
    margin: 3px 0 0 0;
    user-select: none;
    border-radius: 4px;
    padding: 12px 22px;
    overflow: visible;
    background-color: #4c66a4;
    border-color: #4c66a4;
    color: #fff;
    border: 2px solid transparent;
    color: #fff;
    > span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      > img {
        margin: 0 10px 0 0;
      }
    }
  }
`;
const GoogleLogin = styled.div`
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
    margin: 3px 0 0 0;
    user-select: none;
    border-radius: 4px;
    padding: 12px 22px;
    overflow: visible;
    border: 2px solid #d3d4d5;
    color: #676d73;
    > span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      > img {
        margin: 0 10px 0 0;
        width: 24px;
        height: 24px;
      }
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
      <LoginElement>
        <div>
          <input type="checkbox" /> Remember me
        </div>
        <a href="/..">Forgot password?</a>
      </LoginElement>
      <button type="submit">Log in</button>
      <LoginSeperator>
        <span>OR</span>
      </LoginSeperator>
      <FacebookLogin>
        <button type="submit">
          <span>
            <img
              src="http://res.cloudinary.com/dc9kfp5gt/image/upload/q_100/v1531129281/facebook-logo_1_txzgqp.png"
              alt="facebook-icon"
            />
            Log In with Facebook
          </span>
        </button>
      </FacebookLogin>
      <GoogleLogin>
        <button type="submit">
          <span>
            <img
              src="https://static.thumbtackstatic.com/_assets/images/release/pages/login/images/google-logo_48.5111919da69066528795b0426c31b885.svg"
              alt="google-icon"
            />
            Log In with Google
          </span>
        </button>
      </GoogleLogin>
      <p>
        By clicking Log In, Log In with Facebook or Log In with Google, you agree to the{' '}
        <a href="/..">Terms of Use</a> and <a href="/..">Privacy Policy</a>
      </p>
    </form>
  </LoginHolder>
);

const Login = () => (
  <Layout footerIsVisible={false}>
    <Form />
  </Layout>
);

export default Login;
