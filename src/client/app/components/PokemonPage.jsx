import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class PokemonPage extends PureComponent {
	static propTypes = {
		img: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		id: PropTypes.number,
		abilities: PropTypes.array,
		stats: PropTypes.array,
		weight:  PropTypes.number,
		sprites:  PropTypes.object,
		held_items:  PropTypes.array,
		height:  PropTypes.number,
		base_experience:  PropTypes.number,
	};

	render() {
		const { img, name, weight, height, base_experience, abilities, held_items } = this.props;

		return (
			<div>
				<Link to={'/'}>Return to the pokemons list</Link>

				<div className="pokemon-page-header">
					<span><img src={img} alt={name}/> {name}</span>
				</div>

				<div className="pokemon-page-details">
					<h5>Basic stats:</h5>
					<ul>
						<li>Weight: {weight}</li>
						<li>Height: {height}</li>
						<li>Experience: {base_experience}</li>
					</ul>

					<h5>Available abilities:</h5>
					<ul>
						{abilities.map((ability, i) => <li key={i}>{ability.ability.name}</li>)}
					</ul>

					<h5>Held items:</h5>
					<ul>
						{held_items.map((item, i) => <li key={i}>{item.item.name}</li>)}
					</ul>
				</div>
			</div>
		)
	}
}
