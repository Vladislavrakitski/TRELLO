import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';

import './index.css';
import App from './App';

// import '@styles/index.scss';
// import store from '@redux/store';

render(
	// <Provider store={store}>
	<Router>
		<App />
	</Router>,
	//</Provider>,
	document.getElementById('root')
);
