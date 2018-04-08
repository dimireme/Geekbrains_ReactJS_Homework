import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap';

import PokemonSmall from './PokemonSmall';
import DescriptionContainer from '../containers/DescriptionContainer';

export default class Header extends Component {
	static propTypes = {
		links: PropTypes.array.isRequired,
		pokemon: PropTypes.shape({
			img: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired,
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
		return (
			<Navbar className="navbar-dark bg-dark">
				<Modal isOpen={this.state.modal} toggle={this.toggle} >
					<ModalHeader toggle={this.toggle}>
						<PokemonSmall {...this.props.pokemon} />
					</ModalHeader>
					<ModalBody>
						<DescriptionContainer id={this.props.pokemon.id}/>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>

				<NavbarBrand href="/" onClick={this.toggle} >
					<PokemonSmall {...this.props.pokemon} />
				</NavbarBrand>

				<Nav className="ml-auto">
					{this.props.links.map( (item, index) => {
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
