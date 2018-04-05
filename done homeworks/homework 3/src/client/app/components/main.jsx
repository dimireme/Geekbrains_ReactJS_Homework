import React, { Component } from 'react';

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: props.content
		}
	}

	render() {
		const { content } = this.state;

		return (
			<main>
				<h2>This is main section</h2>
				{ content }
			</main>
		);
	}
}
