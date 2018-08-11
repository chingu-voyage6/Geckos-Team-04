import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import CarouselItem from './carouselItem';
import { CaretButtonRight, CaretButtonLeft } from './caretButton';
import { PureServiceCard } from '../Cards/ServiceCard/ServiceCard';

const CarouselBody = styled.div`
  height: 200px;
  width: 100%;

  overflow: hidden;
  position: relative;
`;

const ItemWrapper = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  left: 0;
  transform: translateX(0);

  &.move-items-right-enter {
    transform: translateX(-100%);
    transition: transform 0.25s;
  }

  &.move-items-right-enter-done {
    transform: translateX(0);
    transition: transform 0.25s;
  }

  &.move-items-left-enter {
    left: -100%;
    transform: translateX(100%);
    transition: transform 0.25s;
  }

  &.move-items-right-exit-done {
    transform: translateX(0);
  }

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

const StyledLink = styled(Link)`
  text-decoration: none;
  > div {
    margin: 0;
    div:first-child {
      height: 8rem;
    }
    div:last-child {
      text-align: left;
    }
  }
`;
class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      move: false,
      direction: '',
      itemCount: 1,
      items: [
        { title: '0', color: '#a9b2d0' },
        { title: '1', color: '#56a81e' },
        { title: '2', color: '#cf155d' },
        { title: '3', color: '#78c469' },
        { title: '4', color: '#8dbdd3' },
        { title: '5', color: '#4c9253' },
        { title: '6', color: '#9b9c22' },
        { title: '7', color: '#d89062' },
        { title: '8', color: '#c59daa' },
        { title: '9', color: '#4fb272' },
        { title: '10', color: '#1c5df4' },
        { title: '11', color: '#8eb718' },
      ],
    };
    this.updateItemCount = this.updateItemCount.bind(this);
  }

  componentDidMount() {
    this.updateItemCount();
    window.addEventListener('resize', this.updateItemCount);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateItemCount);
  }

  updateItemCount = () => {
    console.log('resized');
    if (window.innerWidth < 700) this.setState({ itemCount: 2 });
    if (window.innerWidth >= 701 && window.innerWidth <= 1010) this.setState({ itemCount: 3 });
    if (window.innerWidth >= 1011) this.setState({ itemCount: 4 });
  };

  moveForward = () => {
    this.setState({ direction: 'right' }, () => this.setState({ move: true }));
  };

  moveBackward = () => {
    this.setState({ direction: 'left' }, () => this.setState({ move: true }));
  };

  shiftItemsForward = () => {
    const { items, itemCount } = this.state;
    const newItems = [...items.slice(itemCount - items.length), ...items.slice(0, itemCount)];
    this.setState({ items: newItems, move: false });
  };

  shiftItemsBackward = () => {
    const { items, itemCount } = this.state;
    const newItems = [...items.slice(-itemCount), ...items.slice(0, -itemCount)];

    this.setState({ items: newItems });
  };

  render() {
    const { move, direction, items } = this.state;
    return (
      <CarouselWrapper>
        <CarouselBody>
          <CSSTransition
            in={move}
            onEnter={() => {
              if (direction === 'left') this.shiftItemsBackward();
            }}
            onEntered={() => {
              if (direction === 'right') this.shiftItemsForward();
              if (direction === 'left') this.setState({ move: false });
            }}
            classNames={`move-items-${direction}`}
            timeout={{ enter: 250, exit: 0 }}
          >
            <ItemWrapper direction={direction} className={`move-items-${direction}`}>
              {items.map(({ title }) => (
                <CarouselItem key={title}>
                  <StyledLink to="/">
                    <PureServiceCard
                      service={{
                        name: title,
                        image: 'http://thecatapi.com/api/images/get',
                      }}
                    />
                  </StyledLink>
                </CarouselItem>
              ))}
            </ItemWrapper>
          </CSSTransition>
        </CarouselBody>
        <ButtonWrapper>
          <CaretButtonLeft click={this.moveBackward} />
          <CaretButtonRight click={this.moveForward} />
        </ButtonWrapper>
      </CarouselWrapper>
    );
  }
}

export default Carousel;
