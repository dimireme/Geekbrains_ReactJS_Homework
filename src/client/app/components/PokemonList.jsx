import React from 'react';

import PokemonContainer from '../containers/PokemonContainer';

const PokemonList = ({ pokemons }) => {
	return (
		<div>
			{pokemons.map((pokemon, i) => <PokemonContainer pokemon={pokemon} key={i} />)}
		</div>
	);
};

export default PokemonList;