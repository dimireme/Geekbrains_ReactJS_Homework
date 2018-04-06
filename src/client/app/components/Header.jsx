import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap';

import PokemonSmall from './PokemonSmall';
import DescriptionModal from './DescriptionModal';

export default class Header extends Component {
	static propTypes = {
		pokemon: PropTypes.shape({
			name: PropTypes.string,
			src: PropTypes.string,
			effect: PropTypes.string,
		}),
		navLinks: PropTypes.array
	};

	static defaultProps = {
		pokemon: {
			name: 'Unknown',
			src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'
		},
		navLinks: [
			{ text: 'Новая игра',   link: '#' },
			{ text: 'Правила игры', link: '#' },
			{ text: 'Контакты',	    link: '#' }
		]
	};

	constructor(props) {
		super(props);

		this.state = {
			pokemon: this.props.pokemon,
			modal: false
		};
	};

/*	componentDidMount(){
		this.setState({
			modal: true
		});
	}*/

	toggle = (e) => {
		console.log(this.state.modal);
		this.setState({
			modal: !this.state.modal
		});
		e.preventDefault();
	};

	render() {
		const { pokemon, navLinks } = this.props;
		return (
			<Navbar className="navbar-dark bg-dark">
				<NavbarBrand href="/" onClick={this.toggle} >
					<PokemonSmall {...pokemon} />
				</NavbarBrand>

				<DescriptionModal pokemon={pokemon} context={this} />

				<Nav className="ml-auto">
					{navLinks.map( (item, index) => {
						return (
							<NavLink href={item.link} key={`nav-${index}`} className="text-light">
								{item.text}
							</NavLink>
						);
					})}
				</Nav>
			</Navbar>
		);
	}
}
