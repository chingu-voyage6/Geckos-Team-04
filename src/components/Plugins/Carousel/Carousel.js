import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Carousel extends Component {
  static propTypes = {
    title: PropTypes.string,
    resizeDebounce: PropTypes.number,
    duration: PropTypes.number,
    perPage: PropTypes.number,
    loop: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node
    ]),
    hideNextButton: PropTypes.bool,
    hidePrevButton: PropTypes.bool,
  };

  events = [
    'onTouchStart',
    'onTouchEnd',
    'onTouchMove',
    // 'onMouseDown',
    // 'onMouseUp',
    // 'onMouseLeave',
    // 'onMouseMove',
  ];

  constructor(props) {
    super(props);
    this.config = Object.assign(
      {},
      {
        resizeDebounce: 250,
        startIndex: 0,
        duration: 200,
        perPage: 1,
        loop: false,
      },
      props
    );

    this.state = {
      hideNextButton: false,
      hidePrevButton: false,
    };

    this.events.forEach(handler => {
      this[handler] = this[handler].bind(this);
    });

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidMount() {
    this.config.selector = this.selector;
    this.currentSlide = this.config.startIndex;

    this.init();
  }

  componentDidUpdate() {
    this.init();
  }

  setStyle(target, styles) {
    Object.keys(styles).forEach((attribute) => {
      target.style[attribute] = styles[attribute];
    });
  }

  setSelectorWidth() {
    this.selectorWidth = this.selector.getBoundingClientRect().width;
  }

  setInnerElements() {
    this.innerElements = [].slice.call(this.sliderFrame.children);
  }

  resolveSlidesNumber() {
    this.perPage = this.config.perPage;
  }

  slideToCurrent() {
    this.sliderFrame.style.transform = `translate3d(-${Math.round(this.currentSlide * (this.selectorWidth / this.perPage))}px, 0, 0)`;
  }

  init() {
    this.setSelectorWidth();
    this.setInnerElements();
    this.resolveSlidesNumber();

    // set width & transition to the outer div of elements
    const widthItem = this.selectorWidth / this.perPage;
    const itemsToBuild = this.config.loop
      ? this.innerElements.length + this.perPage * 2
      : this.innerElements.length;

    this.setStyle(this.sliderFrame, {
      width: `${widthItem * itemsToBuild}px`,
      webkitTransition: `all ${this.config.duration}ms ${this.config.easing}`,
      transition: `all ${this.config.duration}ms ${this.config.easing}`,
    });

    // set width to each slide based a number of slides
    for (let i = 0; i < this.innerElements.length; i++) {
      this.setStyle(this.innerElements[i], {
        width: `${
          this.config.loop
            ? 100 / (this.innerElements.length + this.perPage * 2)
            : 100 / this.innerElements.length
        }%`,
        float: 'left',
      });
    }

    this.slideToCurrent();
  }

  next() {
    if (this.currentSlide === this.innerElements.length - this.perPage && this.config.loop) {
      this.currentSlide = 0;
    } else {
      this.currentSlide = Math.min(this.currentSlide + 1, this.innerElements.length - this.perPage);
    }
    this.slideToCurrent();
  }

  prev() {
    if (this.currentSlide === 0 && this.config.loop) {
      this.currentSlide = this.innerElements.length - this.perPage;
    } else {
      this.currentSlide = Math.max(this.currentSlide - 1, 0);
    }
    this.slideToCurrent();
  }

  onTouchStart(e) {};
  onTouchEnd(e) {};
  onTouchMove(e) {};

  render() {
    const { hideNextButton, hidePrevButton } = this.state;
    return (
      <div
        ref={selector => (this.selector = selector)}
        style={{ overflow: 'hidden' }}
        {...this.events.reduce((props, event) => Object.assign({}, props, { [event]: this[event] }), {})}
      >
        <div ref={sliderFrame => (this.sliderFrame = sliderFrame)}>
          {React.Children.map(this.props.children, (children, index) =>
            React.cloneElement(children, {
              key: index,
            })
          )}
        </div>
        {!hideNextButton ? <button onClick={this.next}>Next</button> : null}
        {!hidePrevButton ? <button onClick={this.prev}>Prev</button> : null}
      </div>
    );
  }
}
