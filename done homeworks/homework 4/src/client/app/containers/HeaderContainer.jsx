import React, {Component} from 'react';

import Header from '../components/Header';

export default class HeaderContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			links: defaultLinks,
			pokemon: defaultPokemon,
		};
	};

	componentWillMount() {
		const id = Math.floor(Math.random() * 200) + 1;

		fetch(`https://www.pokeapi.co/api/v2/ability/${id}`)
		.then(res => res.json())
		.then(pokemon => {
			this.setState({
				pokemon: {
					name: pokemon.name,
					img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
					id: pokemon.id,
					effects: pokemon.effect_entries[0]
				},
			})
		})
		.catch(err => console.log(`Failed pokemon-form fetch: ${err}`))
	}

	render() {
		const { links, pokemon } = this.state;
		return (
			<Header links={links} pokemon={pokemon} />
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
	id: 0,
	effects: {
		short_effect: '',
		effect: ''
	}
};
