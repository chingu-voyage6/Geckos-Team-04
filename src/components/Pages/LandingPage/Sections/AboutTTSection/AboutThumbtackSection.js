import React from 'react';
import styled from 'styled-components';
import { ButtonBody } from '../../../../Shared/Carousel/caretButton';
import { CaretSmall } from '../../../../Shared/Icon/Icon';
import Section from '../../../../Layout/Section/Section';
import { Slide1, Slide2, Slide3 } from './slides';

const StyledSection = styled(Section)`
  > div {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 500px;
    @media (min-width: 701px) {
      flex-direction: row;
    }
  }
`;
const SlidesContainer = styled.div`
  overflow: hidden;
`;
const SlideWrapper = styled.div`
  width: 100%;

  display: flex;
  left: calc(${({ currentPosition }) => -currentPosition} * 100%);
  transition: all 0.3s;
  position: relative;
`;

const CaretButtonLeft = ButtonBody.extend`
  position: absolute;
  padding: 0;
  padding-left: 5px;
  display: flex;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  width: 35px;
  height: 35px;
  transform: rotate(180deg);
  top: 50%;
  left: -10px;
  margin-top: 2px;
  @media (min-width: 482px) {
    left: -25px;
  }

  @media (min-width: 1011px) {
    left: -40px;
  }
`;
const CaretButtonRight = ButtonBody.extend`
  width: 35px;
  height: 35px;
  padding: 0;
  position: absolute;
  right: -10px;
  top: 50%;
  display: flex;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  @media (min-width: 482px) {
    right: -25px;
  }

  @media (min-width: 1011px) {
    right: -40px;
  }
`;

class AboutThumbtackSection extends React.Component {
  state = {
    position: 0,
    buttonVisibility: {
      left: false,
      right: true,
    },
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
    const { position } = this.state;

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
  };

  render() {
    const {
      position,
      buttonVisibility: { left, right },
    } = this.state;
    return (
      <StyledSection hasBorder padding={false}>
        <SlidesContainer>
          <SlideWrapper currentPosition={position}>
            <Slide1 />
            <Slide2 />
            <Slide3 />
          </SlideWrapper>
        </SlidesContainer>
        <CaretButtonLeft visible={left} onClick={() => this.moveBackward()}>
          <CaretSmall size="18" />
        </CaretButtonLeft>
        <CaretButtonRight visible={right} onClick={() => this.moveForward()}>
          <CaretSmall size="18" />
        </CaretButtonRight>
      </StyledSection>
    );
  }
}

export default AboutThumbtackSection;
