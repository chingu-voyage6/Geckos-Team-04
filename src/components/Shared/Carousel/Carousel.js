import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

export default class Carousel extends Component {
  static propTypes = {
    title: PropTypes.string,
    resizeDebounce: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.string,
    slidesToShow: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number
    ]),
    slidesToScroll: PropTypes.number,
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
        startIndex: 0,
        duration: 200,
        easing: 'ease-out',
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: false,
        resizeDebounce: 250,
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
  }

  componentDidMount() {
    this.config.selector = this.selector;
    this.currentSlide = this.config.startIndex;

    this.init();

    this.onResize = debounce(() => {
      this.resize();
      this.slideToCurrent();
      // onresize follow slidesToShow value
      this.config.slidesToScroll = this.slidesToShow;
    }, this.config.resizeDebounce);

    window.addEventListener('resize', this.onResize);
  }

  componentDidUpdate() {
    this.init();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  setStyle(target, styles) {
    Object.keys(styles).forEach(attribute => {
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
    const { slidesToShow } = this.config;
    if (typeof slidesToShow === 'number') {
      this.slidesToShow = slidesToShow;
    } else if (typeof slidesToShow === 'object') {
      this.slidesToShow = 1;
      Object.keys(slidesToShow).forEach(viewport => {
        if (window.innerWidth > viewport) {
          this.slidesToShow = slidesToShow[viewport];
        }
      });
    }
  }

  resize() {
    this.resolveSlidesNumber();
    this.selectorWidth = this.selector.getBoundingClientRect().width;

    this.setStyle(this.sliderFrame, {
      width: `${(this.selectorWidth / this.slidesToShow) * this.innerElements.length}px`,
    });

    for (let i = 0; i < this.innerElements.length; i++) {
      this.setStyle(this.innerElements[i], {
        width: `${100 / this.innerElements.length}%`,
        float: 'left',
      });
    }
  }

  slideToCurrent() {
    this.sliderFrame.style.transform = `translate3d(-${Math.round(
      this.currentSlide * (this.selectorWidth / this.slidesToShow)
    )}px, 0, 0)`;
  }

  init() {
    this.setSelectorWidth();
    this.setInnerElements();
    this.resolveSlidesNumber();
    // set width & transition to the outer div of elements
    const widthItem = this.selectorWidth / this.slidesToShow;
    const itemsToBuild = this.config.loop
      ? this.innerElements.length + this.slidesToShow * 2
      : this.innerElements.length;
    this.sliderFrame.style.width = `${widthItem * itemsToBuild}px`;
    this.enableTransition();
    // set width to each slide based on a number of slides
    // and if loop is enabled or not
    for (let i = 0; i < this.innerElements.length; i++) {
      this.setStyle(this.innerElements[i], {
        width: `${100 / itemsToBuild}%`,
        float: 'left',
      });
    }

    this.slideToCurrent();
  }

  disableTransition() {
    this.sliderFrame.style.webkitTransition = `all 0ms ${this.config.easing}`;
    this.sliderFrame.style.transition = `all 0ms ${this.config.easing}`;
  }

  enableTransition() {
    this.sliderFrame.style.webkitTransition = `all ${this.config.duration}ms ${this.config.easing}`;
    this.sliderFrame.style.transition = `all ${this.config.duration}ms ${this.config.easing}`;
  }

  next(slidesToScroll = 1) {
    if (this.currentSlide === this.innerElements.length - this.slidesToShow && this.config.loop) {
      this.disableTransition();
      this.currentSlide = 0;
    } else {
      this.currentSlide = Math.min(
        this.currentSlide + slidesToScroll,
        this.innerElements.length - this.slidesToShow
      );
    }

    this.slideToCurrent();
  }

  prev(slidesToScroll = 1) {
    if (this.currentSlide === 0 && this.config.loop) {
      this.currentSlide = this.innerElements.length - this.slidesToShow;
    } else {
      this.currentSlide = Math.max(this.currentSlide - slidesToScroll, 0);
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
        {...this.events.reduce(
          (props, event) => Object.assign({}, props, { [event]: this[event] }),
          {}
        )}
      >
        <div ref={sliderFrame => (this.sliderFrame = sliderFrame)}>
          {React.Children.map(this.props.children, (child, index) =>
            React.cloneElement(child, {
              key: index,
            })
          )}
        </div>
        {!hideNextButton ? <button onClick={() => this.next(this.config.slidesToScroll)}>Next</button> : null}
        {!hidePrevButton ? <button onClick={() => this.prev(this.config.slidesToScroll)}>Prev</button> : null}
      </div>
    );
  }
}
