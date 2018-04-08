import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Description from '../components/Description';

export default class DescriptionContainer extends PureComponent {
	static propTypes = {
		id: PropTypes.number.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			effects: undefined,
			isLoaded: false
		}
	};

	componentWillReceiveProps(nextProps) {
		console.log('props');
/*		this.setState({
		    isLoaded: false
		});*/


		if(nextProps.id !== 0) {
			fetch(`https://www.pokeapi.co/api/v2/ability/${nextProps.id}`)
			.then(res => res.json())
			.then(ability => {
				this.setState({
					effects: ability.effect_entries[0],
					isLoaded: true
				});
			})
			.catch(err => console.log(`Failed ability fetch: ${err}`))
		}
	};

	render() {
		const isLoaded = this.state.isLoaded;
		const effects = this.state.effects;
		//const { isLoaded, effects } = this.state;
		return isLoaded ? <Description {...effects} /> : 'Loading...'
	}
}
