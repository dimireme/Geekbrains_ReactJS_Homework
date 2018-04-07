import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap';

import PokemonSmall from './PokemonSmall';
import DescriptionContainer from '../containers/DescriptionContainer';

export default class Header extends Component {
	static propTypes = {
		pokemon: PropTypes.shape({
			name: PropTypes.string,
			src: PropTypes.string,
			id: PropTypes.number
		}),
		links: PropTypes.array
	};

	static defaultProps = {
		links: [
			{ text: 'Новая игра',   link: '#' },
			{ text: 'Правила игры', link: '#' },
			{ text: 'Контакты',	    link: '#' }
		]
	};

	constructor(props) {
		super(props);
		this.state = {
			links: props.links,
			myPokemon: props.pokemon || defaultPokemon,
			modal: false
		};
	};

	componentWillReceiveProps(nextProps){
		this.setState({
			myPokemon: nextProps.pokemon,
			modal: true
		});
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
				<NavbarBrand href="/" onClick={this.toggle} >
					<PokemonSmall {...this.state.myPokemon} />
				</NavbarBrand>

				<Modal isOpen={this.state.modal} toggle={this.toggle} >
					<ModalHeader toggle={this.toggle}>
						<PokemonSmall {...this.state.myPokemon} />
					</ModalHeader>
					<ModalBody>
						{/*<DescriptionContainer id={this.state.myPokemon.id}/>*/}
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>

				<Nav className="ml-auto">
					{this.state.links.map( (item, index) => {
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
