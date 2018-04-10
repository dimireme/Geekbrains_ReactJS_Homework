import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Pokemon from '../components/Pokemon';

export default class PokemonContainer extends PureComponent {
	static propTypes = {
		pokemon: PropTypes.shape({
			img: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			id: PropTypes.number,
			detailsSource: PropTypes.string.isRequired
		})
	};

	constructor(props) {
		super(props);

		this.state = {
			isLoaded: true,
			pokemon: {...props.pokemon, details: undefined},
		}
	}

	detailsShowHandler = (detailsSource) => {
		//  Если данные уже есть в state, меняем флаг isLoaded, компонент перерисуется с данными из state.
		if(this.state.pokemon.details) {
			this.setState({
				isLoaded: true
			});
		} else {
			this.setState({
				isLoaded: false
			});

			fetch(detailsSource)
			.then(res => res.json())
			.then(details => {
				this.setState((prevState) => {
					return {
						pokemon: {...prevState.pokemon, details: details.effect_entries[0]},
			            isLoaded: true,
					};
				});
			})
			.catch(err => console.log(`Failed pokemon-details fetch: ${err}`));
		}
	};

	detailsHideHandler = () => {
		this.setState({
			isLoaded: false
		});
	};

	render() {
		return (
			<Pokemon {...this.state} detailsShowHandler={this.detailsShowHandler} detailsHideHandler={this.detailsHideHandler} />
		);
	}
}
