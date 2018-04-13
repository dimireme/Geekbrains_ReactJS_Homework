import React, { PureComponent }  from 'react';
import PropTypes from 'prop-types';

export default class LinkDisplayDetails extends PureComponent{
	static propTypes = {
		clickHandler: PropTypes.func.isRequired,
		argument: PropTypes.string
	};

	onHideClick = (e) => {
		const { clickHandler, argument } = this.props;

		if (typeof clickHandler === 'function') {
			clickHandler(argument);
		}

		e.preventDefault();
	};

	render() {
		return (
			<a href="#" onClick={this.onHideClick}>Hide details</a>
		)
	}
}
