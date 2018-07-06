import React from 'react';
import Layout from '../Layout/Layout';

const Form = () => (
  <div>
    <p>Some content goes in here!</p>
  </div>
);

const Login = () => (
  <Layout footerIsVisible={false}>
    <Form />
  </Layout>
);

export default Login;
