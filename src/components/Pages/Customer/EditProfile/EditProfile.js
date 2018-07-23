// import moment from 'moment-timezone';
import React from 'react';
import styled from 'styled-components';
import Header from '../../../Layout/Header/Header';
import Section from '../../../Layout/Section/Section';
import AccountLink from './AccountLink';
import ProfileForm from './ProfileForm';
// import CopyRight from '../../Layout/Footer/CopyRight';

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

// const TimezoneList = (() => {
//   /* 
//     Returns a list of timezones with time attached to that timezone
//     e.g. Eastern (currently 7:00am)
//   */
//   const arr = [];
//   const curTime = Date.now();
//   Object.keys(Timezones).forEach(timezone =>
//     arr.push(`${timezone} (currently ${moment.tz(curTime, Timezones[timezone]).format('h:ma')})`)
//   );
//   return arr;
// })();

const EditProfile = props => (
  <Wrapper>
    <Header />
    <Section isGray hasBorder>
      <AccountLink />
      <Title>Edit personal information</Title>
      <ProfileForm {...props} />
    </Section>
  </Wrapper>
);

export default EditProfile;
