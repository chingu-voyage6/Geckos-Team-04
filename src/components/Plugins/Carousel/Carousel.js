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

    this.events.forEach(handler => {
      this[handler] = this[handler].bind(this);
    });
  }

  componentDidMount() {
    this.config.selector = this.selector;
    this.currentSlide = this.config.startIndex;

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
    // This one converts NodeList into Array
    this.innerElements = [].slice.call(this.sliderFrame.children);
  }

  resolveSlidesNumber() {
    this.perPage = this.config.perPage;
  }

  slideToCurrent() {
    this.sliderFrame.style.transform = `translate3d(-${Math.round(this.currentSlide * (this.selectorWidth / this.perPage))}px, 0, 0)`;
    //this.sliderFrame.style.transform = `translateX(-${(100 / this.innerElements.length) * this.perPage}%)`;
  }

  init() {
    this.setSelectorWidth();
    this.setInnerElements();
    this.resolveSlidesNumber();

    // set width & transition to the outer div of elements
    this.setStyle(this.sliderFrame, {
      width: `${(this.selectorWidth / this.perPage) * this.innerElements.length}px`,
      webkitTransition: `all ${this.config.duration}ms ${this.config.easing}`,
      transition: `all ${this.config.duration}ms ${this.config.easing}`,
    });

    // set width to each slide based a number of slides
    for (let i = 0; i < this.innerElements.length; i++) {
      this.setStyle(this.innerElements[i], {
          width: `${100 / this.innerElements.length}%`
      });
    }

    this.slideToCurrent();
    
  }

  onTouchStart(e) {};
  onTouchEnd(e) {};
  onTouchMove(e) {};

  render() {
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
              style: { float: 'left' },
            })
          )}
        </div>
      </div>
    );
  }
}
