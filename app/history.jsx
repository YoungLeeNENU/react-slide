/**
 * @fileOverview History panel in the slide bar
 * @name history.jsx
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */
import React from 'react';

import '../less/history.less';

export default class Mask extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.props = {};
	}
    componentWillMount () {
        // todo
    }
    historyCallback() {
        alert('clicked');
    }
    render() {
        return (
<div className='history-panel'>
	<div className="history-header">
		<i className="icon iconfont icon-tuwenxiangqing"></i>
		<p className="title">History</p>
		<p className="project-name">app-slt-m</p>
	</div>
	<div className="history-list">
		<ul>
			<li>
				<div className="history-item">
					<i className="icon iconfont icon-sousuo"></i>
					<a onClick={this.historyCallback.bind(this)} className="history-item-link">2016-01-15</a>
				</div>
			</li>
			<li>
				<div className="history-item">
					<i className="icon iconfont icon-sousuo"></i>
					<a onClick={this.historyCallback.bind(this)} className="history-item-link">2016-01-15</a>
				</div>
			</li>
			<li>
				<div className="history-item">
					<i className="icon iconfont icon-sousuo"></i>
					<a onClick={this.historyCallback.bind(this)} className="history-item-link">2016-01-15</a>
				</div>
			</li>
			<li>
				<div className="history-item">
					<i className="icon iconfont icon-sousuo"></i>
					<a onClick={this.historyCallback.bind(this)} className="history-item-link">2016-01-15</a>
				</div>
			</li>
		</ul>
	</div>
</div>
);
    }
};

