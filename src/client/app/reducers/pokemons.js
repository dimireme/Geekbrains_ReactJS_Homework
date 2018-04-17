import { handleActions } from 'redux-actions';

import { loadPokemonsStart, loadPokemonsSuccess, loadPokemonsFailure } from '../actions/Pokemons';

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
		return {
			...state,
			pokemons: action.payload,
			isLoaded: true
		};
	},
	[loadPokemonsFailure]: (state, action) => {
		return {
			...state,
			isLoaded: false,
			error: action.payload,
		}
	}
}, initialState);