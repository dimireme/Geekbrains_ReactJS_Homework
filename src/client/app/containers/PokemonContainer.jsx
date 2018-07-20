import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EventLink from '../components/EventLink';
import PokemonTitle from '../components/PokemonTitle';
import PokemonShortDescription from '../components/PokemonShortDescription';
import { loadDetails, hideDetails } from '../actions/details';

class PokemonContainer extends PureComponent {
	static propTypes = {
		pokemon: PropTypes.shape({
			img: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired,
			detailsSource: PropTypes.string.isRequired,
			isHide: PropTypes.bool,
			error: PropTypes.string,
			details: PropTypes.object
		}),
		loadDetails: PropTypes.func,
		hideDetails: PropTypes.func,
	};

	render() {
		const { pokemon, loadDetails, hideDetails } = this.props;
		const { isHide, error, details } = pokemon;

		if(error) return (
			<div>
				<PokemonTitle {...pokemon}/>
				<span>Fail pokemon's details loading: {error}</span>
			</div>
		);

		if(isHide) {
			return (
				<div>
					<PokemonTitle {...pokemon}/>
					<EventLink clickHandler={loadDetails} argument={pokemon} text={'Display details...'}/>
				</div>
			)
		} else {
			return (
				<div>
					<PokemonTitle {...pokemon}/>
					{details ? <PokemonShortDescription {...pokemon.details}/> : <span>Loading...</span>}
					<EventLink clickHandler={hideDetails} argument={pokemon.id} text={'Hide details...'}/>
				</div>
			)
		}
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadDetails: (pokemon) => loadDetails(dispatch)(pokemon),
		hideDetails: (pokemon) => hideDetails(dispatch)(pokemon),
	}
}

export default connect(null, mapDispatchToProps)(PokemonContainer);
