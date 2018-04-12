import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PokemonCardDetails extends PureComponent {
	static propTypes = {
		details: PropTypes.object.isRequired,
		detailsHideHandler: PropTypes.func.isRequired,
	};

	onHideClick = (e) => {
		const { detailsHideHandler } = this.props;

		if (typeof detailsHideHandler === 'function') {
			detailsHideHandler();
		}

		e.preventDefault();
	};

	render() {
		const { weight, height, base_experience, abilities, held_items } = this.props.details;

		return (
			<div className="pokemon-card-details">
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

				<a href="#" onClick={this.onHideClick}>Hide details</a>
			</div>
		)
	}
}
