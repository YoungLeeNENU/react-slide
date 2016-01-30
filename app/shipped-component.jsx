/**
 * @fileOverview Component as a whole to be shipped
 * @name shipped-component.jsx
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */
import React        from 'react';
import Mask         from './mask.jsx';
import SlideBarBody from './slide-bar.jsx';

import '../less/page.less';
import '../less/slide.less';
import '../less/slide-theme.less';

export default class SlideBar extends React.Component {
	constructor () {
		super();
		this.state = {
            isMasked: false,
            incomingSlideBarUnfold: false    // true
        };
	}
    componentWillMount () {
    }
    render () {
        if (this.props.hasMask) {
            return <div className="slide-bar-container">
		    	<Mask hasMask={this.props.hasMask} isMasked={this.state.isMasked}></Mask>
		    	<SlideBarBody hasMask={this.props.hasMask} isMasked={this.state.isMasked} incomingSlideBarUnfold={this.state.incomingSlideBarUnfold} handlers={this.props.handlers}></SlideBarBody>
		    </div>;
        } else {
            return <div className="slide-bar-container">
		    	<SlideBarBody hasMask={this.props.hasMask} isMasked={this.state.isMasked} incomingSlideBarUnfold={this.state.incomingSlideBarUnfold} handlers={this.props.handlers}></SlideBarBody>
		    </div>;
        }
    }
    componentDidMount () {
        // todo
    }
};
