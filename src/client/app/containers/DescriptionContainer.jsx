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
			id: this.props.id,
			effects: undefined
		}
	};

	componentWillReceiveProps() {
		fetch(`https://www.pokeapi.co/api/v2/ability/${this.state.id}`)
		.then(res => res.json())
		.then(ability => {
			console.log(ability);
			this.setState({
				effects: ability.effect_entries[0]
			});
		})
		.catch(err => console.log(`Failed ability fetch: ${err}`))
	};

	render() {
		return (
			<Description effects={this.state.effects} />
		)
	}
}
