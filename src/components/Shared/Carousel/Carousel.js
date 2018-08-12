import React from 'react';
import styled from 'styled-components';
import { ButtonBody } from './caretButton';
import { ServiceLocationCard, ServicePricingCard } from '../Cards/ServiceCard/ServiceCard';
import { CarouselItemWrapper } from './carouselItem';
import { CaretSmall as Caret } from '../Icon/Icon';

const CarouselBody = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const ItemWrapper = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  left: calc(${({ currentPosition }) => -currentPosition} * 100%);
  transition: all 0.3s;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 482px) {
    overflow-y: visible;
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
`;
const CarouselWrapper = styled.div`
  position: relative;
`;
const CaretWrapper = styled.div`
  height: 18px;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CaretButtonLeft = ButtonBody.extend`
  left: -40px;
  width: 35px;
  height: 35px;
  top: 35%;
  padding: 0;
  padding-left: 5px;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  transform: rotate(180deg) translateY(-50%);
  @media (min-width: 482px) {
    left: -20px;
  }

  @media (min-width: 1011px) {
    left: -40px;
  }
`;
const CaretButtonRight = ButtonBody.extend`
  transform: translateY(50%);
  top: 35%;
  width: 35px;
  height: 35px;
  padding: 0;

  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  @media (min-width: 482px) {
    right: -20px;
  }

  @media (min-width: 1011px) {
    right: -40px;
  }
`;

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      position: 0,
      itemCount: 1,
      buttonVisibility: {
        left: false,
        right: true,
      },
      items: [],
    };
    this.updateItemCount = this.updateItemCount.bind(this);
  }

  componentDidMount() {
    this.updateItemCount();
    const { cardContent } = this.props;
    window.addEventListener('resize', this.updateItemCount);
    this.setState({ items: cardContent });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateItemCount);
  }

  updateItemCount = () => {
    const { position, itemCount } = this.state;
    if (itemCount === 3 && position === 2) {
      this.setState({ position: 1 });
    }
    if (itemCount === 2 && position === 1) {
      this.setState({ position: 2 });
    }
    if (window.innerWidth <= 1010) this.setState({ itemCount: 2 });
    if (window.innerWidth >= 1011) this.setState({ itemCount: 3 });
  };

  moveForward = () => {
    const { position } = this.state;
    this.setState({ position: position + 1 }, () => this.updateButtonVisibility());
  };

  moveBackward = () => {
    const { position } = this.state;
    this.setState({ position: position - 1 }, () => this.updateButtonVisibility());
  };

  updateButtonVisibility = () => {
    const { itemCount, position } = this.state;
    if (itemCount === 2) {
      switch (position) {
        case 0:
          this.setState({ buttonVisibility: { left: false, right: true } });
          break;
        case 1:
          this.setState({ buttonVisibility: { left: true, right: true } });
          break;
        default:
          this.setState({ buttonVisibility: { left: true, right: false } });
      }
    } else {
      switch (position) {
        case 0:
          this.setState({ buttonVisibility: { left: false, right: true } });
          break;
        default:
          this.setState({ buttonVisibility: { left: true, right: false } });
      }
    }
  };

  render() {
    const {
      position,
      buttonVisibility: { left, right },
      items,
    } = this.state;

    const { cardType } = this.props;
    return (
      <CarouselWrapper>
        <CarouselBody>
          <ItemWrapper currentPosition={position}>
            {items.length > 0 &&
              items.map(({ title, imgUrl }) => (
                <CarouselItemWrapper title={title} key={title}>
                  {cardType === 'pricing' && (
                    <ServicePricingCard width="100%" service={{ name: title, image: imgUrl }} />
                  )}
                  {cardType === 'location' && (
                    <ServiceLocationCard width="100%" service={{ name: title, image: imgUrl }} />
                  )}
                </CarouselItemWrapper>
              ))}
          </ItemWrapper>
        </CarouselBody>
        <ButtonWrapper>
          <CaretButtonLeft visible={left} onClick={() => this.moveBackward()}>
            <CaretWrapper>
              <Caret size="18" />
            </CaretWrapper>
          </CaretButtonLeft>
          <CaretButtonRight visible={right} onClick={() => this.moveForward()}>
            <CaretWrapper>
              <Caret size="18" />
            </CaretWrapper>
          </CaretButtonRight>
        </ButtonWrapper>
      </CarouselWrapper>
    );
  }
}

export default Carousel;
