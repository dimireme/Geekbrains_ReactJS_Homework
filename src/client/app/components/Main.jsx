import React, { Component } from 'react';

import PokemonListContainer from '../containers/PokemonListContainer'

export default class Main extends Component {
	render() {
		return (
			<main>
				<PokemonListContainer />
			</main>
		);
	}
}
