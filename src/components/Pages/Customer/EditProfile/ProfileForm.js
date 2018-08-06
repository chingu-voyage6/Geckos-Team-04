import moment from 'moment-timezone';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { InputField, SelectDropdown } from '../../../Shared/Misc';
import { DefaultButton } from '../../../Shared/UI/Button/Button';
import { isAuthenticated } from '../../../auth/auth-helper';
import { update } from '../../../client/api-user';
import Timezones from '../../../Shared/Misc/TimeZones';
import { escapeHtml, unescapeHtml } from '../../../client/escape-helper';

const StyledForm = styled.div`
  margin: 0 -5px; /* to make a gap between flex items */
  margin-bottom: 60px;
  padding: 0 60px 0 60px;
`;

const StyledFieldset = styled.fieldset`
  border: 0;
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
  state = {
    firstName: unescapeHtml(this.props.name.first),
    lastName: unescapeHtml(this.props.name.last),
    phone: unescapeHtml(this.props.phone),
    email: this.props.email,
    timezone: this.props.timezone,
    redirectToProfile: false,
    error: '',
  };

  handleInputChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const jwt = isAuthenticated();
    if (jwt) {
      const user = {
        name: {
          first: escapeHtml(this.state.firstName) || undefined,
          last: escapeHtml(this.state.lastName) || undefined,
        },
        email: this.state.email || undefined,
        phone: escapeHtml(this.state.phone) || undefined,
        timezone: this.state.timezone || undefined,
      };

      update(user, { userId: jwt.user._id }, { t: jwt.token }).then(data => {
        if (data.error) {
          this.setState({ error: data.error });
        } else {
          this.setState({ redirectToProfile: true });
        }
      });
    }
  };

  render() {
    const TimezoneList = (() => {
      /*
        Returns a list of timezones with time attached to that timezone
        e.g. Eastern (currently 7:00am)
      */
      const arr = [];
      const curTime = Date.now();
      Object.keys(Timezones).forEach(tz =>
        arr.push(`${tz} (currently ${moment.tz(curTime, Timezones[tz]).format('h:ma')})`)
      );
      return arr;
    })();

    const { firstName, lastName, email, phone, error, timezone, redirectToProfile } = this.state;

    if (redirectToProfile) {
      return <Redirect to="/customer/profile" />;
    }

    return (
      <StyledForm>
        {error && <p>{error}</p>}
        <form>
          <StyledFieldset>
            <FormHeader>
              <InputField
                type="text"
                name="firstName"
                label="First name"
                value={firstName}
                onChange={this.handleInputChange}
              />
            </FormHeader>
            <FormHeader>
              <InputField
                type="text"
                name="lastName"
                label="Last name"
                value={lastName}
                onChange={this.handleInputChange}
              />
            </FormHeader>
            <FormFooter>
              <InputField
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={this.handleInputChange}
              />
              <InputField
                type="text"
                name="phone"
                label="Phone"
                value={phone}
                onChange={this.handleInputChange}
              />
              <SelectDropdown
                label="Time zone"
                name="timezone"
                onChange={this.handleInputChange}
                value={timezone}
              >
                {TimezoneList.map(tz => {
                  const zone = tz.split(' ')[0];
                  return (
                    <option key={tz} value={Timezones[zone]}>
                      {tz}
                    </option>
                  );
                })}
              </SelectDropdown>
            </FormFooter>
            <ButtonRow>
              <Button color="#676d73" background="#fff" border="2px solid #d3d4d5">
                Cancel
              </Button>
              <Button type="submit" onClick={this.handleSubmit}>
                Save
              </Button>
            </ButtonRow>
          </StyledFieldset>
        </form>
      </StyledForm>
    );
  }
}

export default ProfileForm;
