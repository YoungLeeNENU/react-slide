/**
 * @fileOverview
 * @name main.js
 * @author Young Lee <youngleemails@gmail.com>
 * @license MIT
 */
import React    from 'react';
import ReactDom from 'react-dom';
import History  from './history';
import Favor    from './favor';
import Config   from './config';
import SlideBar from './shipped-component';

main();

function main() {
	let handlersConfig = [ {
		key: 'history-handler',
		content: 'icon-dengdai',
		template: <History/>
	}, // {
	// 	key: 'favor-handler',
	// 	content: 'icon-shoucang',
	// 	template: <Favor/>
	// }, {
	// 	key: 'config-handler',
	// 	content: 'icon-shezhi',
	// 	template: <Config/>
	// }
	                     ];
	ReactDom.render(<SlideBar hasMask={false} handlers={handlersConfig}></SlideBar>, document.getElementById('slide-bar'));
}
