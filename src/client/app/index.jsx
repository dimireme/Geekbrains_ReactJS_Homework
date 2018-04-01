import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Layout from './components/layout';

class App extends Component {
	render() {
		return <Layout />;
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
