import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PokemonList from '../components/PokemonList';
import { loadPokemons } from '../actions/pokemons';

class PokemonListContainer extends PureComponent {
	static propTypes = {
		pokemons: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				img: PropTypes.string,
				id: PropTypes.number,
				detailsSource: PropTypes.string,
				isHide: PropTypes.bool,
				error: PropTypes.string,
			})
		),
		error: PropTypes.string,
		isLoaded: PropTypes.bool,
		loadPokemons: PropTypes.func
	};

	componentWillMount() {
		this.props.loadPokemons();
	}

	render() {
		const { pokemons, isLoaded, error } = this.props;

		if(error) return `Fail pokemons loading: ${error}`;

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
		loadPokemons: () => loadPokemons(dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListContainer);
