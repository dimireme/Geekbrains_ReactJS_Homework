import React from 'react';

import PokemonContainer from '../containers/PokemonContainer';

/*pokemons: PropTypes.arrayOf(
	PropTypes.shape({
		img: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		detailsSource: PropTypes.string.isRequired
	})
)*/

export default function({ pokemons }) {
	return (
		<div>
			{pokemons.map((pokemon, i) => <PokemonContainer pokemon={pokemon} key={i} />)}
		</div>
	);
}
