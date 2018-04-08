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
		console.log(this.state.effects);
		const isLoaded = this.state.isLoaded;
		const effects = this.state.effects;
		return isLoaded ? <Description {...effects} /> : 'Loading...'
	}
}
/*
 if(isLoading) {
 return (
 <div>
 <p>{effects.short_effect}</p>
 <p>{effects.effect}</p>
 </div>
 )
 }
 return 'Loading...';
 */

/*
 render() {
 let isLoading = this.state.isLoading;
 let effects = this.state.effects;
 if(isLoading) {
 return (
 <div>
 <p>{effects.short_effect}</p>
 <p>{effects.effect}</p>
 </div>
 )
 }
 return 'Loading...';
 }
 */