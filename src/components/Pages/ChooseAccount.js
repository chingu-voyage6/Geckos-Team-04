import React from 'react';
import styled from 'styled-components';
import Layout from '../Layout/Layout';

const ChooseAccount = styled.div`
padding-top: 64px;
padding-bottom: 64px;
`;
const chooseAccount = () => (
  <Layout footerIsVisible={false}>
    <ChooseAccount>Abolade</ChooseAccount>
  </Layout>
);

export default chooseAccount;
