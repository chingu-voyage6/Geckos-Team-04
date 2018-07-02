import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Card from '../Card';
import CardName from '../CardName';
import CardBody from '../CardBody';
import Icon from '../Icon/Icon';

const CardIconDiv = styled.div`
  color: #a97ff0;
`;

const CardIcon = props => (
  <Icon title="Icon name" {...props}>
    <path d="" />
  </Icon>
);

function UtilsCard(props) {
  const {
    utility: { name, image },
  } = props;

  return (
    <Card>
      <CardBody>
        <CardIcon />
        <CardName>{name}</CardName>
      </CardBody>
    </Card>
  );
}

UtilsCard.propTypes = {
  utility: PropTypes.object.isRequired,
};

export default UtilsCard;
