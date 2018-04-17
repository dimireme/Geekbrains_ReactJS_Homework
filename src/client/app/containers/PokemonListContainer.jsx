import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PokemonList from '../components/PokemonList';
import { loadPokemons } from '../actions/Pokemons';

class PokemonListContainer extends PureComponent {

	// ВОПРОС!!!
	// Это правильно что берем функцию из props?
	// Как можно было бы вызвать экшн loadPokemons(dispatch) напрямую?
	componentWillMount() {
		this.props.load();
	}

	static propTypes = {
		pokemons: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				img: PropTypes.string,
				id: PropTypes.number,
				detailsSource: PropTypes.string,
			})
		),
		error: PropTypes.string,
		isLoaded: PropTypes.bool,
		load: PropTypes.func
	};

	render() {
		const { pokemons, isLoaded, error } = this.props;
		if(error) return `Fail pokemon's loading: ${error}`;
		return isLoaded ? <PokemonList pokemons={pokemons} /> : 'Loading';
	}
}

function mapStateToProps(state) {
	return {
		pokemons: state.pokemons.pokemons,
		isLoaded: state.pokemons.isLoaded,
		error: state.pokemons.error,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		load: () => loadPokemons(dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListContainer);
