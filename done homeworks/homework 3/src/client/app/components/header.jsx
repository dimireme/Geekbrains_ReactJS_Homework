import React, { Component } from 'react';

import Login from './login';
import Menu from './menu';

export default class Header extends Component {
	render() {
		return (
			<header className="page-header">
				<h1 className="logo" onClick={goHome}>Рога и копыта</h1>
				<Menu />
				<Login />
			</header>
		);
	}
}

function goHome() {
	document.location.href = "index.html?success=true";
}
