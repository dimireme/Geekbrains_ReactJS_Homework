import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap';

import style from './header.css';

import PokemonTitle from './PokemonTitle';
import PokemonShortDescription from './PokemonShortDescription';

export default class Header extends PureComponent {
	static propTypes = {
		links: PropTypes.array.isRequired,
		pokemon: PropTypes.object,
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
			<Navbar className={`${style.container} navbar-dark bg-dark`}>
				<Modal isOpen={modal} toggle={this.toggle} >
					<ModalHeader toggle={this.toggle} className="pokemon-small">
						<PokemonTitle {...pokemon} noLink={true} />
					</ModalHeader>
					<ModalBody>
						<PokemonShortDescription {...pokemon}/>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>

				<NavbarBrand href="/" onClick={this.toggle} >
					<PokemonTitle {...pokemon} noLink={true} />
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
