import React, { PureComponent } from 'react';

import PokemonList from '../components/PokemonList';

export default class PokemonListContainer extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			pokemons: [],
			isLoaded: false,
			page: 1
		};
	}

	componentWillMount() {
		this.setState({
			isLoaded: false
		});

		fetch(`https://www.pokeapi.co/api/v2/ability/?limit=5&offset=20`)
		.then(res => res.json())
		.then(query => {
			this.setState({
				isLoaded: true,
				pokemons: query.results.map(normalizePokemon)
			});
		});
	}

	render() {
		const { isLoaded, pokemons } = this.state;
		return isLoaded ? <PokemonList pokemons={pokemons} /> : 'Loading pokemon list...'
	}
}

const normalizePokemon = (pokemon) => {
	const id = pokemon.url.match(/\/(\d+)\//).pop();
	return {
		name: pokemon.name,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
		id: +id,
		detailsSource: pokemon.url
	};
};
