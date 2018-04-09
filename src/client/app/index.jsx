import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderContainer from './containers/HeaderContainer';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<HeaderContainer />
				<Main />
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
