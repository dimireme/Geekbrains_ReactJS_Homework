import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PokemonCardDetails extends PureComponent {
	static propTypes = {
		pokemon: PropTypes.shape({
			img: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			id: PropTypes.number,
			details: PropTypes.object.isRequired
		})
	};

	render() {
		const { img, name } = this.props;
		const { weight, height, base_experience, abilities, held_items } = this.props.details;

		return (
			<div>
				<a href="#">Return to the pokemons list.</a>

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
