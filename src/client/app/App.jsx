import React, { PureComponent } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderContainer from './containers/HeaderContainer';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends PureComponent {
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
