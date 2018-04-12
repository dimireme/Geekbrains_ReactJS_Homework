import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PokemonPage from '../components/PokemonPage';

export default class PokemonContainer extends PureComponent {

	constructor(props) {
		super(props);
		
		console.log(`constructor: ${props}`);
		this.state = {
			isLoaded: true
		}
	}

	componentWillMount() {
		console.log(`mounted: ${this.props}`);
		this.setState({
			isLoaded: false
		});

		console.log(this.props);
	}

	render() {
		const { pokemon, isLoaded } = this.state;

		return (
			<div>
				{isLoaded ? <PokemonPage {...pokemon}/> : 'Loading...'}
			</div>
		)

	}

}
