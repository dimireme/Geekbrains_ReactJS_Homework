import React, { PureComponent }  from 'react';
import PropTypes from 'prop-types';

export default class LinkShowDetails extends PureComponent{
	static propTypes = {
		clickHandler: PropTypes.func.isRequired,
		argument: PropTypes.string.isRequired
	};

	onShowClick = (e) => {
		const { clickHandler, argument } = this.props;

		if (typeof clickHandler === 'function') {
			clickHandler(argument);
		}

		e.preventDefault();
	};

	render() {
		return (
			<a href="#" onClick={this.onShowClick}>Display more...</a>
		)
	}
}
