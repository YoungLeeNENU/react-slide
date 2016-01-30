/**
 * @fileOverview Slide bar body
 * @name slide-bar.jsx
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */
import React from 'react';
import _     from 'underscore';

export default class ReactSlide extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.props = {};
	}
    componentWillMount () {
        this.setState({ 
            // refresh: true,
            hasMask: this.props.hasMask,
            slideBarUnfold: this.props.incomingSlideBarUnfold, 
            template: this.props.handlers[0]['template'] 
        });
    }
	shouldComponentUpdate () {
        return true;    // this.state.refresh
	}
    handlerClicked(type) {
        let selectedHandler = _.findWhere(this.props.handlers, { key: type });
        if (type != this.state.historyClick && this.state.slideBarUnfold) {
            this.setState({ 
                // refresh: true,
                template: selectedHandler.template
            });
        } else if (type != this.state.historyClick && !this.state.slideBarUnfold) {
            this.setState({ 
                // refresh: true,
                template: selectedHandler.template,
                slideBarUnfold: !this.state.slideBarUnfold,
            });
            this.slideAction();
        } else if (type == this.state.historyClick && this.state.slideBarUnfold) {
            this.setState({ 
                // refresh: false,
                slideBarUnfold: !this.state.slideBarUnfold
            });
            this.slideAction();
        } else if (type == this.state.historyClick && !this.state.slideBarUnfold) {
            this.setState({ 
                // refresh: false,
                slideBarUnfold: !this.state.slideBarUnfold
            });
            this.slideAction();
        }
        this.setState({ historyClick: type });
    }
    slideAction() {
        let slideBarBody = document.getElementsByClassName('slide-bar')[0], 
            refreshedClass;
        if (this.state.slideBarUnfold) {
            if (this.state.hasMask) {
                let slideMask = document.getElementsByClassName('slide-mask')[0], maskClass;
                maskClass = _.without(slideMask.className.split(' '), 'hide');
                maskClass.push('hide');
                slideMask.className = maskClass.join(' ');
            }
            refreshedClass = _.without(slideBarBody.className.split(' '), 'unfold');
            refreshedClass.push('fold');
        } else {
            if (this.state.hasMask) {
                let slideMask = document.getElementsByClassName('slide-mask')[0], maskClass;
                maskClass = _.without(slideMask.className.split(' '), 'hide');
                slideMask.className = maskClass.join(' ');
            }
            refreshedClass = _.without(slideBarBody.className.split(' '), 'fold');
            refreshedClass.push('unfold');
        }
        slideBarBody.className = refreshedClass.join(' ');
    }
    render() {
        let context = this, 
            content = this.state.template;    // default
        if (this.props.incomingSlideBarUnfold) {
		    return <div className='slide-bar unfold slide-bar-monokai'>
		    	<div className='slide-handler slide-handler-monokai'>
		    		<ul className='handler-items'>
						{ context.props.handlers.map((element) => 
		    			    <li onClick={context.handlerClicked.bind(this, element.key)}  key={element.key} className='handler-item handler-item-monokai fold-unfold'>
		    			    	<i className={'icon iconfont ' + element.content}></i>
		    			    </li>
						) }
		    		</ul>
		    	</div>
		    	<div className='slide-panel'>{content}</div>
		    </div>;
        } else {
		    return <div className='slide-bar fold slide-bar-monokai'>
		    	<div className='slide-handler slide-handler-monokai'>
		    		<ul className='handler-items'>
						{ context.props.handlers.map((element) => 
		    			    <li onClick={context.handlerClicked.bind(this, element.key)} key={element.key} className='handler-item handler-item-monokai fold-unfold'>
		    			    	<i className={'icon iconfont ' + element.content}></i>
		    			    </li>
						) }
		    		</ul>
		    	</div>
		    	<div className='slide-panel'>{content}</div>
		    </div>;
        }
    }
};
