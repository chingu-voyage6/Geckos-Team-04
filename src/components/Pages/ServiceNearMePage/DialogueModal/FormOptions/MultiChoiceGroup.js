import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import MultiChoice from './MultiChoice';

const MultiChoiceGroup = ({ options, updateValue, question, answers }) => (
  <Fragment>
    {options.map(option => (
      <MultiChoice
        answers={answers}
        question={question}
        key={option}
        option={option}
        updateValue={updateValue}
        checked={answers ? answers.includes(option) : false}
      />
    ))}
  </Fragment>
);

MultiChoiceGroup.propTypes = {
  options: PropTypes.any.isRequired,
  answers: PropTypes.any.isRequired,
  updateValue: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
};

export default MultiChoiceGroup;
