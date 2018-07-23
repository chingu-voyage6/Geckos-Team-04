import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SingleChoice from './SingleChoice';

const SingleChoiceGroup = ({ options, updateValue, question, answers }) => (
  <Fragment>
    {options.map(option => (
      <SingleChoice
        key={option}
        checked={answers === option}
        name={question}
        option={option}
        updateValue={updateValue}
        question={question}
      />
    ))}
  </Fragment>
);

SingleChoiceGroup.propTypes = {
  options: PropTypes.any.isRequired,
  updateValue: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.string.isRequired,
};

export default SingleChoiceGroup;
