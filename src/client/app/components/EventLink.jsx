import React, { PureComponent }  from 'react';
import PropTypes from 'prop-types';

export default class EventLink extends PureComponent{
	static propTypes = {
		clickHandler: PropTypes.func.isRequired,
		argument: PropTypes.string,
		text: PropTypes.string.isRequired,
	};

	onHideClick = (e) => {
		const { clickHandler, argument } = this.props;

		if (typeof clickHandler === 'function') {
			clickHandler(argument);
		}

		e.preventDefault();
	};

	render() {
		const { text } = this.props;
		return (
			<a href="#" onClick={this.onHideClick}>{text}</a>
		)
	}
}