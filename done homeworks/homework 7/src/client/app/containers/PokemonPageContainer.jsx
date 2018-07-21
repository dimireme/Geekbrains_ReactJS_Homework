import React, { PureComponent } from 'react';

import PokemonPage from '../components/PokemonPage';

export default class PokemonContainer extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			pokemon: {},
			isLoaded: true
		}
	}

	componentWillMount() {
		this.setState({
			isLoaded: false
		});

		const id = this.props.match.params.id;

		fetch(`https://www.pokeapi.co/api/v2/pokemon/${id}/`)
			.then(res => res.json())
			.then(pokemon => {
				pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
				this.setState({
					isLoaded: true,
					pokemon
				});
			});
	}

	render() {
		const { pokemon, isLoaded } = this.state;

		return (
			<div>
				{isLoaded ? <PokemonPage pokemon={pokemon} /> : 'Loading pokemon...'}
			</div>
		)
	}
}

