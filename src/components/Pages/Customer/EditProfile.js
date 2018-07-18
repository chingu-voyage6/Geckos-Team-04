import React from 'react';
import styled from 'styled-components';
import Header from '../../Layout/Header/Header';
import Section from '../../Layout/Section/Section';
import { InputField } from '../../Shared/Misc';
import { DefaultButton } from '../../Shared/UI/Button/Button';
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

const StyledForm = styled.div`
  margin-bottom: 64px;
`;
const FormHeader = styled.div`
  width: 50%;
  padding-left: 32px;
  display: inline-block;
`;

const FormFooter = styled.div`
  padding-left: 32px;
`;

const EditProfile = props => (
  <Wrapper>
    <Header {...props} />
    <Section isGray hasBorder>
      <Title>Edit personal information</Title>
      <StyledForm>
        <form name="" method="POST" action="">
          <fieldset>
            <FormHeader>
              <InputField type="text" label='First name' />
            </FormHeader>
            <FormHeader>
              <InputField type="text" label='Last name' />
            </FormHeader>
            <FormFooter>
              <InputField type="email" label='Email' />
              <InputField type="text" label='Phone' />
            </FormFooter>
          </fieldset>
        </form>
      </StyledForm>
      <DefaultButton>Save</DefaultButton>
      <DefaultButton>Cancel</DefaultButton>
    </Section>
  </Wrapper>
);

export default EditProfile;
