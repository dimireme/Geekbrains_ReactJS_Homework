import React, { PureComponent } from 'react';

import PokemonListContainer from '../containers/PokemonListContainer'

export default class Main extends PureComponent {
	render() {
		return (
			<main>
				<PokemonListContainer />
			</main>
		);
	}
}
