import React, {Component} from 'react';

import Header from '../components/Header';

export default class HeaderContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			links: defaultLinks,
			pokemon: defaultPokemon,
			modal: false
		};
	};

	componentWillMount() {
		const id = Math.floor(Math.random() * 200) + 1;

		fetch(`https://www.pokeapi.co/api/v2/pokemon-form/${id}`)
		.then(res => res.json())
		.then(pokemon => {
			this.setState({
				pokemon: {
					img: pokemon.sprites.front_default,
					name: pokemon.name,
					id: pokemon.id
				},
			})
		})
		.catch(err => console.log(`Failed pokemon-form fetch: ${err}`))
	}

	render() {
		return (
			<Header links={this.state.links} pokemon={this.state.pokemon} />
		);
	}
}

const defaultLinks = [
	{ text: 'Новая игра',   link: '#' },
	{ text: 'Правила игры', link: '#' },
	{ text: 'Контакты',	    link: '#' }
];

const defaultPokemon = {
	name: 'Unknown',
	img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png',
	id: 0
};
