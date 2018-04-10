import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Pokemon from '../components/Pokemon';

/*
	В state компонента есть парамер status, который принимает значения:
        'HIDE' - не показывать детальную информацию о покемоне
        'LOADING' - показать сообщение о начале загрузки
        'LOADED' - показать детальную информацию о покемоне
 */
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
			pokemon: {...props.pokemon, details: undefined},
			status: 'HIDE'
		}
	}

	detailsShowHandler = (detailsSource) => {
		if(this.state.pokemon.details) {
			// Если данные уже есть в state, меняем флаг status, компонент перерисуется с данными из state.
			this.setState({
				status: 'LOADED'
			});
		} else {
			// Выводим сообщение о том что загрузка началась.
			this.setState({
				status: 'LOADING'
			});

			fetch(detailsSource)
			.then(res => res.json())
			.then(details => {
				this.setState((prevState) => {
					return {
						pokemon: {...prevState.pokemon, details: details.effect_entries[0]},
						status: 'LOADED'
					};
				});
			})
			.catch(err => console.log(`Failed pokemon-details fetch: ${err}`));
		}
	};

	detailsHideHandler = () => {
		// Просто прячем описание, данные остаются в state.
		this.setState({
			status: 'HIDE'
		});
	};

	render() {
		return (
			<Pokemon {...this.state} detailsShowHandler={this.detailsShowHandler} detailsHideHandler={this.detailsHideHandler} />
		);
	}
}
