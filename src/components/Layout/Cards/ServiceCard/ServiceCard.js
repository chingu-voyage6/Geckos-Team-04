import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import CardHeader from '../CardHeader';
import CardName from '../CardName';
import CardTitle from '../CardTitle';
import CardBody from '../CardBody';

function ServiceCard(props) {
  const {
    service: { name, title },
  } = props;

  return (
    <Card>
      <CardHeader />
      <CardBody>
        <CardName>{name}</CardName>
        <CardTitle>{title}</CardTitle>
      </CardBody>
    </Card>
  );
}

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
