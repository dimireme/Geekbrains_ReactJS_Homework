import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap';

import PokemonSmall from './PokemonSmall';

export default class Header extends Component {
	static propTypes = {
		pokemon: PropTypes.shape({
			name: PropTypes.string,
			src: PropTypes.string,
		}),
		navLinks: PropTypes.array
	};

	static defaultProps = {
		pokemon: {
			name: 'Loading',
			src: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/0.png',
		}
	};

	render() {
		const { pokemon, navLinks } = this.props;
		return (
			<Navbar className="navbar-dark bg-dark">
				<NavbarBrand href="/">
					<PokemonSmall {...pokemon}/>
				</NavbarBrand>

				<Nav className="ml-auto">
					{navLinks.map( (item, i) => {
						return (
							<NavLink href={item.link} key={`nav-${i}`} className="text-light">
								{item.text}
							</NavLink>
						);
					})}
				</Nav>
			</Navbar>
		);
	}
}
