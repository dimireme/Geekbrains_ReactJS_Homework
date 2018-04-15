import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PokemonCardHeader extends PureComponent {
	static propTypes = {
		img: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	};

	render() {
		const { name, img } = this.props;

		return (
			<div className="pokemon-card-header">
				<span><img src={img} alt={name}/> {name}</span>
			</div>
		)
	}
}
