import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokemonCardHeader from '../components/PokemonCardHeader';
import PokemonCardDetails from '../components/PokemonCardDetails';
import DisplayMore from '../components/DisplayMore';

/* Константы для параметра status. Определяют отображается ли детальная информация о покемоне. */
const HIDE = 'HIDE';        // не показывать детальную информацию
const LOADING = 'LOADING';  // показать сообщение о начале загрузки
const LOADED = 'LOADED';    // показать детальную информацию о покемоне

export default class PokemonContainer extends PureComponent {
	static propTypes = {
		pokemon: PropTypes.shape({
			img: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired,
			detailsSource: PropTypes.string.isRequired
		})
	};

	constructor(props) {
		super(props);

		this.state = {
			pokemon: {...props.pokemon, details: undefined},
			status: HIDE
		}
	}

	detailsShowHandler = (detailsSource) => {
		// Если данные уже есть в state, меняем флаг status, компонент перерисуется с данными из state.
		if(this.state.pokemon.details) {
			this.setState({
				status: LOADED
			});
			return;
		}

		// Выводим сообщение о том что загрузка началась.
		this.setState({
			status: LOADING
		});

		fetch(detailsSource)
			.then(res => res.json())
			.then(details => {
				this.setState((prevState) => {
					return {
						pokemon: {...prevState.pokemon, details},
						status: LOADED
					};
				});
			})
			.catch(err => console.log(`Failed pokemon-details fetch: ${err}`));
	};

	detailsHideHandler = () => {
		// Прячем описание, детали остаются в state.
		this.setState({
			status: HIDE
		});
	};

	render() {
		const { pokemon, status } = this.state;

		if(status === HIDE) {
			return (
				<div>
					<PokemonCardHeader {...pokemon} />
					<DisplayMore clickHandler={this.detailsShowHandler} argument={pokemon.detailsSource}/>
				</div>
			)
		}

		if(status === LOADING) {
			return (
				<div>
					<PokemonCardHeader {...pokemon} />
					<span>Loading...</span>
				</div>
			)
		}

		if(status === LOADED) {
			return (
				<div>
					<PokemonCardHeader {...pokemon} />
					<PokemonCardDetails {...pokemon} detailsHideHandler={this.detailsHideHandler}/>
				</div>
			)
		}
	}
}
