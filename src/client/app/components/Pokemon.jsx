import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

export default class Pokemon extends PureComponent {
	static propTypes = {
		pokemon: PropTypes.shape({
			img: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			id: PropTypes.number,
			detailsSource: PropTypes.string.isRequired,
			details: PropTypes.shape({
				short_effect: PropTypes.string,
				effect: PropTypes.string
			})
		}),
		detailsShowHandler: PropTypes.func.isRequired,
		detailsHideHandler: PropTypes.func.isRequired,
		status: PropTypes.string.isRequired
	};

	onShowClick = (e) => {
		const { detailsShowHandler } = this.props;

		if (typeof detailsShowHandler === 'function') {
			detailsShowHandler(this.props.pokemon.detailsSource);
		}

		e.preventDefault();
	};

	onHideClick = (e) => {
		const { detailsHideHandler } = this.props;

		if (typeof detailsHideHandler === 'function') {
			detailsHideHandler();
		}

		e.preventDefault();
	};

	render() {
		const { pokemon, status } = this.props;
		const { name, img, details } = pokemon;

		if(status === 'HIDE') {
			return (
				<div className="pokemon-container">
					<img src={img} alt={name}/>
					<h5>{name}</h5>
					<a href="#" onClick={this.onShowClick}>Show details...</a>
				</div>
			)
		}
		if(status === 'LOADING') {
			return (
				<div className="pokemon-container">
					<img src={img} alt={name}/>
					<h5>{name}</h5>
					<p>Loading details...</p>
				</div>

			)
		}
		if(status === 'LOADED') {
			return (
				<div className="pokemon-container">
					<img src={img} alt={name}/>
					<h5>{name}</h5>
					<Description {...details}/>
					<a href="#" className="card-link" onClick={this.onHideClick}>Hide details</a>
				</div>
			)
		}
	}
}
