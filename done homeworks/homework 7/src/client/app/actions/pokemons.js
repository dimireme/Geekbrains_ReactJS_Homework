import { createAction } from 'redux-actions';

/* Загрузка списка покемонов */

export const loadPokemonsStart = createAction('LOAD_POKEMONS_START');
export const loadPokemonsSuccess = createAction('LOAD_POKEMONS_SUCCESS');
export const loadPokemonsFailure = createAction('LOAD_POKEMONS_FAILURE');

export const loadPokemons = (dispatch) => {
	dispatch(loadPokemonsStart());
	fetch(`https://www.pokeapi.co/api/v2/pokemon/?limit=5&offset=20`)
		.then(res => res.json())
		.then(query => {
			//const pokemons = query.results.map(normalizePokemon);
			const pokemons = query.results.reduce(normalizePokemon, []);
			dispatch(loadPokemonsSuccess(pokemons));
		})
		.catch(err => dispatch(loadPokemonsFailure(`Failed to load pokemons: ${err}`)));
};

/* Вспомогательная функция номировки покемона */
const normalizePokemon = (pokemons, pokemon) => {
	const id = Number( pokemon.url.match(/\/(\d+)\//).pop() );
	pokemons[id] = {
		name: pokemon.name,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
		id: id,
		detailsSource: pokemon.url,
		isHide: true,
		error: '',
	};
	return pokemons;
};
