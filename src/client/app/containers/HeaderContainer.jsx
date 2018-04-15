import React, { PureComponent } from 'react';

import Header from '../components/Header';

export default class HeaderContainer extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			links: defaultLinks,
			pokemon: {
				name: 'Unknown',
				img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png',
			}
		};
	};

	componentWillMount() {
		const id = Math.floor(Math.random() * 200) + 1;

		fetch(`https://www.pokeapi.co/api/v2/pokemon/${id}`)
		.then(res => res.json())
		.then(pokemon => {
			this.setState({
				pokemon: {
					...pokemon,
					img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
				}
			})
		})
		.catch(err => console.log(`Failed pokemon fetch in header: ${err}`))
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
