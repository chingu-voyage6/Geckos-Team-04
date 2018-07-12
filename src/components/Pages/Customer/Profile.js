import React from 'react';
import Layout from '../../Layout/Layout';
import Section from '../../Layout/Section/Section';
import ProfileCard from '../../Shared/Cards/ProfileCard';

const Profile = props => (
  <Layout>
    <Section>
      <ProfileCard {...props} />
      <div>Account Settings</div>
      <div>Notification Settings</div>
      <div>Logout</div>
    </Section>
  </Layout>
);

Profile.defaultProps = {
  name: 'John Doe',
  avatar: 'https://via.placeholder.com/124x124',
  email: 'john.doe@example.com',
  projects: 1,
  reviews: 0,
};

export default Profile;
