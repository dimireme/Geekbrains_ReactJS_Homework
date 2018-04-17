import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(reducers);

import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('app'));
