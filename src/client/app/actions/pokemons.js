import { createAction } from 'redux-actions';

export const loadPokemonsStart = createAction('LOAD_POKEMONS');
export const loadPokemonsSuccess = createAction('LOAD_POKEMONS_SUCCESS');
export const loadPokemonsFailure = createAction('LOAD_POKEMONS_FAILURE');

export const loadPokemons = (dispatch) => {
	dispatch(loadPokemonsStart());
	fetch(`https://www.pokeapi.co/api/v2/pokemon/?limit=5&offset=20`)
		.then(res => res.json())
		.then(query => {
			const pokemons = query.results.map(normalizePokemon);
			dispatch(loadPokemonsSuccess(pokemons));
		})
		.catch(err => dispatch(loadPokemonsFailure(err)));
};

const normalizePokemon = (pokemon) => {
	const id = pokemon.url.match(/\/(\d+)\//).pop();
	return {
		name: pokemon.name,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
		id: +id,
		detailsSource: pokemon.url
	};
};