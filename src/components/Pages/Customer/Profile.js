import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../../Layout/Layout';
import ProfileCard from '../../Shared/Cards/ProfileCard';
import { ListGroup, ButtonArrowLink } from '../../Shared/Misc';
import { isAuthenticated } from '../../auth/auth-helper';
import { read } from '../../client/api-user';

const StyledSection = styled.section`
  display: flex;
  padding: 20px 60px 20px 60px;
  align-content: center;
  align-items: flex-start;
  background-color: #fafafa;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 0px;
    flex-direction: column;
  }
`;

const Footer = styled.div`
  margin: 8px;
  flex-grow: 1;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin: 1rem 0 0 0;
    padding: 0px;
    width: 100%;
  }
`;

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        avatar: '',
        name: {
          first: '',
          last: '',
        },
        email: '',
        reviews: 0,
        projects: 0,
      },
      redirectToSignin: false,
    };
  }

  componentDidMount = () => {
    const jwt = isAuthenticated();
    if (jwt) {
      read({ userId: jwt.user._id }, { t: jwt.token }).then(data => {
        if (data.error) this.setState({ redirectToSignin: true });
        else this.setState({ profile: data.message });
      });
    }
  };

  render() {
    const { profile, redirectToSignin } = this.state;
    profile.fullName = `${profile.name.first} ${profile.name.last}`;

    if (redirectToSignin) {
      return <Redirect to="/login" />;
    }
    return (
      <Layout>
        <StyledSection>
          <ProfileCard
            avatar={profile.avatar}
            name={profile.fullName}
            email={profile.email}
            reviews={profile.reviews}
            projects={profile.projects}
          />
          <Footer>
            <ListGroup hasBoxShadow isRounded>
              <ButtonArrowLink to="/profile/information">Account Settings</ButtonArrowLink>
              <ButtonArrowLink to="/profile/notifications">Notification Settings</ButtonArrowLink>
            </ListGroup>
            <ListGroup hasBoxShadow isRounded>
              <ButtonArrowLink to="/logout">Logout</ButtonArrowLink>
            </ListGroup>
          </Footer>
        </StyledSection>
      </Layout>
    );
  }
}
