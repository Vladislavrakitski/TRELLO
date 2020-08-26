import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// import App from './components/App';

// import '@styles/index.scss';
import store from '@redux/store';

render(
	<Provider store={store}>
		<Router>
			<h1>Trello</h1>
		</Router>
	</Provider>,
	document.getElementById('root')
);
