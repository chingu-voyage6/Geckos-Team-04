import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: props.size || '1em',
            color: props.color || 'currentColor',
            title: props.title || 'Image Icon'
        }
    }

    render() {
        const {size, title, children, color} = this.state;
        
        return (
        <svg width={size} height={size} viewBox="0 0 32 32">
            <title>{title}</title>
            {children}
            <style jsx>{`
            svg {
                vertical-align: middle;
                fill: ${color};
            }
            `}</style>
        </svg>
        );

    }
} 

export default Icon;