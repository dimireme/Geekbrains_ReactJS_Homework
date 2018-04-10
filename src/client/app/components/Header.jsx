import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap';

import Description from './Description';

export default class Header extends Component {
	static propTypes = {
		links: PropTypes.array.isRequired,
		pokemon: PropTypes.shape({
			img: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired,
			effects: PropTypes.shape({
				short_effect: PropTypes.string.isRequired,
				effect: PropTypes.string.isRequired
			})
		}),
	};

	constructor(props) {
		super(props);

		// По умолчанию показываем модальное окно
		this.state = {
			modal: true
		};
	};

	toggle = (e) => {
		this.setState({
			modal: !this.state.modal
		});
		e.preventDefault();
	};

	render() {
		const { pokemon, links } = this.props;
		const { modal } = this.state;
		return (
			<Navbar className="navbar-dark bg-dark">
				<Modal isOpen={modal} toggle={this.toggle} >
					<ModalHeader toggle={this.toggle} className="pokemon-small">
						<img src={pokemon.img} alt={pokemon.name}/> {pokemon.name}
					</ModalHeader>
					<ModalBody>
						<Description {...pokemon.effects} />
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>

				<NavbarBrand href="/" onClick={this.toggle} className="pokemon-small" >
					<img src={pokemon.img} alt={pokemon.name}/> {pokemon.name}
				</NavbarBrand>

				<Nav className="ml-auto">
					{links.map( (item, index) => {
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
