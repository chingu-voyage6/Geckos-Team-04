import React, { Component } from 'react';
import styled from 'styled-components';
import { InputField, SelectDropdown } from '../../../Shared/Misc';
import { DefaultButton } from '../../../Shared/UI/Button/Button';

const StyledForm = styled.div`
  margin: 0 -5px; /* to make a gap between flex items */
  margin-bottom: 60px;
  padding: 0 60px 0 60px;
`;

const FormHeader = styled.div`
  width: 50%;
  display: inline-block;
  padding: 0 5px; /* to make a gap between flex items */
`;

const FormFooter = styled.div`
  padding: 0 5px;
`;

const ButtonRow = styled.div`
  position: relative;
  padding-right: 5px;
  margin: 0 -5px;
`;

const Button = DefaultButton.extend`
  font-size: 16px;
  margin: 0 5px;
  float: right;
`;

class ProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      timezone: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    this.setState({ [name]: target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    const { firstName, lastName, email, phone, timezone } = this.state;
    return (
      <StyledForm>
        <form>
          <fieldset>
            <FormHeader>
              <InputField
                type="text"
                name="firstName"
                label="First name"
                value={firstName}
                onChange={this.handleChange}
              />
            </FormHeader>
            <FormHeader>
              <InputField
                type="text"
                name="lastName"
                label="Last name"
                value={lastName}
                onChange={this.handleChange}
              />
            </FormHeader>
            <FormFooter>
              <InputField
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={this.handleChange}
              />
              <InputField
                type="text"
                name="phone"
                label="Phone"
                value={phone}
                onChange={this.handleChange}
              />
              <SelectDropdown label="Time zone">
                <option value={this.state.timezone}>{this.state.timezone}</option>
                <option value="Test">Test</option>
              </SelectDropdown>
            </FormFooter>
          </fieldset>
          <ButtonRow>
            <Button color="#676d73" background="#fff" border="2px solid #d3d4d5">
              Cancel
            </Button>
            <Button type="submit" onClick={this.handleSubmit}>Save</Button>
          </ButtonRow>
        </form>
      </StyledForm>
    );
  }
}

export default ProfileForm;
