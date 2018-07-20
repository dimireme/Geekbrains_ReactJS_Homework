import React, { PureComponent }  from 'react';
import PropTypes from 'prop-types';

export default class EventLink extends PureComponent{
	static propTypes = {
		clickHandler: PropTypes.func.isRequired,
		argument: PropTypes.oneOfType([
			PropTypes.object,
			PropTypes.number
		]),
		text: PropTypes.string.isRequired,
	};

	onEventLinkClick = (e) => {
		const { clickHandler, argument } = this.props;

		if (typeof clickHandler === 'function') {
			clickHandler(argument);
		}

		e.preventDefault();
	};

	render() {
		const { text } = this.props;
		return (
			<a href="#" onClick={this.onEventLinkClick}>{text}</a>
		)
	}
}