import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div className="container">
					<Header />
					<Main />
					<Footer color="dark"/>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
