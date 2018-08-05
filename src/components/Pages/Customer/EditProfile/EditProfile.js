import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Header from '../../../Layout/Header/Header';
import Section from '../../../Layout/Section/Section';
import AccountLink from './AccountLink';
import ProfileForm from './ProfileForm';
import { isAuthenticated } from '../../../auth/auth-helper';
import { read } from '../../../client/api-user';

const Wrapper = styled.div`
  display: block;
`;

const Title = styled.h3`
  text-align: center;
  color: #2f3033;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
`;

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        phone: '',
        name: {
          first: '',
          last: '',
        },
        email: '',
        timezone: '',
      },
      redirectToSignin: false,
    };
  }

  componentWillMount = () => {
    const jwt = isAuthenticated();
    if (jwt) {
      read({ userId: jwt.user._id }, { t: jwt.token }).then(data => {
        if (data.error) this.setState({ redirectToSignin: true });
        else this.setState({ profile: data.message });
      });
    }
  };

  render() {
    const { redirectToSignin, profile } = this.state;

    if (redirectToSignin) {
      return <Redirect to="/login" />;
    }

    return (
      <Wrapper>
        <Header />
        <Section isGray hasBorder>
          <AccountLink />
          <Title>Edit personal information</Title>
          {profile.email && <ProfileForm {...profile} />}
        </Section>
      </Wrapper>
    );
  }
}
