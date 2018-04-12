import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderContainer from './containers/HeaderContainer';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
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
