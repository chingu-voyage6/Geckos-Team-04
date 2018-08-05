import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../Layout/Layout';
import { create } from '../client/api-user';
import { singin } from '../auth/api-auth';
import { authenticate } from '../auth/auth-helper';

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

class FormRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      redirectToReferrer: false,
      formSuccessMessage: '',
      formErrorMessage: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    const { lastName, firstName, email, password } = this.state;
    const user = {
      name: {
        first: firstName,
        last: lastName,
      },
      email,
      password,
    };

    create(user).then(data => {
      if (data.error) {
        this.setState({ formErrorMessage: data.error });
      } else {
        this.setState({ formSuccessMessage: data.message });
        const credentials = {
          email: user.email,
          password: user.password,
        };
        singin(credentials).then(res => {
          if (res.error) {
            this.setState({ formErrorMessage: res.error });
          } else {
            authenticate(res, () => {
              this.setState({
                formSuccessMessage: res.message,
                redirectToReferrer: true,
              });
            });
          }
        });
      }
    });
  };

  handleInputChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      formErrorMessage,
      redirectToReferrer,
      firstName,
      lastName,
      email,
      password,
    } = this.state;

    const { from } = this.props.location.state || { from: { pathname: '/' } };

    let renderErrorMessage;

    if (formErrorMessage) {
      renderErrorMessage = (
        <span>
          <p>{formErrorMessage}</p>
        </span>
      );
    }

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Layout footerIsVisible={false} defaultCopyright={false}>
        <LoginHolder>
          <h1>Create your account</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="first_name">First Name</label>
            <input
              value={firstName}
              onChange={this.handleInputChange}
              name="firstName"
              id="first_name"
              type="text"
            />
            <label htmlFor="last_name">Last Name</label>
            <input
              value={lastName}
              onChange={this.handleInputChange}
              name="lastName"
              id="last_name"
              type="text"
            />
            <label htmlFor="email">Email address</label>
            <input
              value={email}
              onChange={this.handleInputChange}
              name="email"
              type="text"
              id="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
              id="password"
            />
            {renderErrorMessage}
            <button type="submit">Create account</button>
          </form>
        </LoginHolder>
      </Layout>
    );
  }
}

export default FormRegister;
