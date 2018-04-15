import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PokemonTitle from './PokemonTitle';
import PokemonLongDescription from './PokemonLongDescription';

export default class PokemonPage extends PureComponent {
	static propTypes = {
		pokemon: PropTypes.shape({
			img: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			id: PropTypes.number,
			sprites:  PropTypes.object,
			weight:  PropTypes.number,
			height:  PropTypes.number,
			base_experience:  PropTypes.number,
			stats: PropTypes.array,
			abilities: PropTypes.array,
			held_items:  PropTypes.array,
		})
	};

	render() {
		const { pokemon } = this.props;

		return (
			<div>
				<Link to={'/'}>Return to the pokemons list</Link>

				<PokemonTitle {...pokemon} />
				<PokemonLongDescription {...pokemon} />

				<Link to={'/'}>Return to the pokemons list</Link>
			</div>
		)
	}
}
