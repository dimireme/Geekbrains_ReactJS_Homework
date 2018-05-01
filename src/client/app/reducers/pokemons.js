import { handleActions } from 'redux-actions';

import { loadPokemonsStart, loadPokemonsSuccess, loadPokemonsFailure } from '../actions/pokemons';
import { loadDetailsStart, loadDetailsSuccess, loadDetailsFailure, hideDetailsSuccess } from '../actions/details';

const initialState = {
	pokemons: [],
	myPokemon: {},
	error: '',
	isLoaded: false,
};

export const pokemonsReducer = handleActions({

	[loadPokemonsStart]: (state) => {
		return {
			...state,
			isLoaded: false
		};
	},

	[loadPokemonsSuccess]: (state, action) => {
		const pokemons = action.payload;
		return {
			...state,
			pokemons,
			isLoaded: true
		};
	},

	[loadPokemonsFailure]: (state, action) => {
		const error = action.payload;
		return {
			...state,
			isLoaded: false,
			error,
		}
	},

	[loadDetailsStart]: (state, action) => {
		const id = action.payload;
		return {
			...state,
			pokemons: state.pokemons.map(pokemon => {
				return (pokemon.id === id) ? { ...pokemon, isHide: false } : pokemon;
			})
		};
	},

	[loadDetailsSuccess]: (state, action) => {
		const { id, details } = action.payload;
		return {
			...state,
			pokemons: state.pokemons.map(pokemon => {
				return (pokemon.id === id) ? { ...pokemon, details } : pokemon;
			})
		};
	},

	[loadDetailsFailure]: (state, action) => {
		const { id, error } = action.payload;
		return {
			...state,
			pokemons: state.pokemons.map(pokemon => {
				return (pokemon.id === id) ? { ...pokemon, error } : pokemon;
			})
		};
	},

	[hideDetailsSuccess]: (state, action) => {
		const id = action.payload;
		return {
			...state,
			pokemons: state.pokemons.map(pokemon => {
				return (pokemon.id === id) ? { ...pokemon, isHide: true } : pokemon;
			})
		};
	},

}, initialState);