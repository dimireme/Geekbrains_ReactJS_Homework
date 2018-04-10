import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';

export default class PokemonList extends PureComponent {
	static propTypes = {
		pokemons: PropTypes.arrayOf(
			PropTypes.shape({
				img: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				id: PropTypes.number,
				effects: PropTypes.shape({
					short_effect: PropTypes.string,
					effect: PropTypes.string
				})
			})
		)
	};

	constructor(props) {
		super(props);

	}

	render() {
		console.log(this.props);
		const { pokemons } = this.props;
		return (
			<div>
				{pokemons.map((pokemon, i) => <Pokemon {...pokemon} key={i} />)}
			</div>
		);
	}
}
