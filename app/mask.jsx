/**
 * @fileOverview Page mask
 * @name mask.jsx
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */
import React from 'react';

export default class Mask extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.props = {};
	}
    componentWillMount () {
        // todo
    }
    render() {
        if (this.props.isMasked) {
            return <div className='slide-mask'></div>;
        } else {
            return <div className='slide-mask hide'></div>;
        }
    }
};
