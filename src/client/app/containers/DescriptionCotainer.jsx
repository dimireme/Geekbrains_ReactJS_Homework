import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Description from '../components/Description';

export default class DescriptionContainer extends PureComponent {
	static propTypes = {
		name: PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name,
			text: ''
		}
	};

	componentWillMount() {
		fetch(`https://www.pokeapi.co/api/v2/ability/${this.state.name}`)
		.then(res => res.json())
		.then(ability => {
			const effects = ability.effect_entries[0];
			this.setState({
				text: `${effects.short_effect} \n${effects.effect}`,
			});
		});
	};

	render() {
		return (
			<Description text={this.state.text}  />
		)
	}
}
