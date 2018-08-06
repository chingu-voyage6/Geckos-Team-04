import React, { Fragment } from 'react';
import Autosuggest from 'react-autosuggest';

import './search.css';

const otherServices = [
  {
    name: 'House Cleaning',
    year: 1972,
  },
  {
    name: 'Handyman',
    year: 2012,
  },
  {
    name: 'Personal Training',
    year: 2012,
  },
  {
    name: 'Local Moving',
    year: 2012,
  },
  {
    name: 'Dog Training',
    year: 2012,
  },
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());
  const regex = new RegExp(`${escapedValue}`, 'i');

  return otherServices.filter(service => regex.test(service.name));
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

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
      suggestions: [
        [
          {
            name: 'House Cleaning',
            link: 'house-cleaning/near-me',
          },
          {
            name: 'Handyman',
            link: 'handyman/near-me',
          },
          {
            name: 'Personal Training',
            link: 'personal-training/near-me',
          },
          {
            name: 'Massage Therapy',
            link: 'local-moving/near-me',
          },
          {
            name: 'Dog Training',
            link: 'dog-training/near-me',
          },
        ],
      ],
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
