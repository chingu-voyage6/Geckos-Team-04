import React from 'react';
import styled from 'styled-components';

const ItemBody = styled.div`

  min-width: 75%;
  max-width: 75%;
  padding: 0 5px;

  }
  @media (min-width: 482px) {
    min-width: 50%;
    max-width: 50%;
  }
  @media (min-width: 701px) {
    min-width: 33.33%;
    max-width: 33.33%;
  }
  @media (min-width: 1011px) {
    min-width: 25%;
    max-width: 25%;
  }
`;

const ItemBodyLarge = styled.div`
 min-width: 75%;
  max-width: 75%;
  padding: 0 5px;

  }
  @media (min-width: 482px) {
    min-width: 50%;
    max-width: 50%;
  }
  @media (min-width: 1011px) {
    min-width: 33.33%;
    max-width: 33.33%;
  }
  `;

const carouselItem = ({ children }) => <ItemBody>{children}</ItemBody>;

export const CarouselItemWrapper = ({ children }) => <ItemBodyLarge>{children}</ItemBodyLarge>;

export default carouselItem;
