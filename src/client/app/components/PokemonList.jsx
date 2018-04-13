import React from 'react';

import PokemonContainer from '../containers/PokemonContainer';

export default function({ pokemons }) {
	return (
		<div>
			{pokemons.map((pokemon, i) => <PokemonContainer pokemon={pokemon} key={i} />)}
		</div>
	);
}
