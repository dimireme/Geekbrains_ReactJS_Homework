import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokemonContainer from '../containers/PokemonContainer';

export default class PokemonList extends PureComponent {
	static propTypes = {
		pokemons: PropTypes.arrayOf(
			PropTypes.shape({
				img: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				id: PropTypes.number,
				detailsSource: PropTypes.string.isRequired
			})
		)
	};

	constructor(props) {
		super(props);
	}

	render() {
		const { pokemons } = this.props;
		return (
			<div>
				{pokemons.map((pokemon, i) => <PokemonContainer pokemon={pokemon} key={i} />)}
			</div>
		);
	}
}
