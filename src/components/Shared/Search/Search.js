import React, { Fragment } from 'react';
import Autosuggest from 'react-autosuggest';
import { Link } from 'react-router-dom';
import './search.css';
import styled from 'styled-components';

import * as services from '../../Pages/MoreServicesPage/pageData/servicesData';

function splitServices(service) {
  return service.split('\n');
}

const allServices = Object.keys(services).reduce(
  (acc, curr) => acc.concat(splitServices(services[curr])),
  []
);

const popularServices = [
  'House Cleaning',
  'Handyman',
  'Personal Training',
  'Local Moving',
  'Dog Training',
];

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 10px 20px;
  display: block;
`;

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());
  const regex = new RegExp(`${escapedValue}`, 'i');

  if (escapedValue === '') return popularServices.map(service => service);

  const results = [];

  for (let i = 0; i < allServices.length; i += 1) {
    if (regex.test(allServices[i])) results.push(allServices[i]);
    if (results.length > 4) break;
  }

  return results;
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;
const convertToNearmeLink = name => `/${name.toLowerCase().replace(/ /, '-')}/near-me`;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <StyledLink to={convertToNearmeLink(suggestion)}>{suggestion}</StyledLink>
);

class Search extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  shouldRenderSuggestions = () => true;

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Who do you need to hire?',
      value,
      onChange: this.onChange,
    };

    // Finally, render it!
    return (
      <Fragment>
        {}
        <Autosuggest
          shouldRenderSuggestions={this.shouldRenderSuggestions}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          getSectionItems={this.getSectionItems}
        />
      </Fragment>
    );
  }
}

export default Search;
