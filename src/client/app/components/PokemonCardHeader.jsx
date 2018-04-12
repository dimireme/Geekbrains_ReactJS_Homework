import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import Footer from './Footer';

export default class PokemonCardHeader extends PureComponent {
	static propTypes = {
		img: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	};

	render() {
		const { name, img, id } = this.props;

		return (
			<div className="pokemon-card-header">
				<Link to={`/pokemon/${id}`}><span><img src={img} alt={name}/> {name}</span></Link>
				<Route path="/pokemon/:id" component={Footer}/>
			</div>
		)
	}
}
