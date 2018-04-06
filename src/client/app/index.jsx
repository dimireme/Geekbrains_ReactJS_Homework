import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			myPokemon: {},
		};
	}

	async componentWillMount() {
		const id = Math.floor(Math.random() * 200) + 1;

		try {
			const shapes = await fetch(`https://www.pokeapi.co/api/v2/pokemon-form/${id}`)
			.then(res => res.json());

			const src = shapes.sprites.front_default;
			const name = shapes.name;

			const ability = await fetch(`https://www.pokeapi.co/api/v2/ability/${id}`)
			.then(res => res.json());

			const effect = ability.effect_entries[0].effect;

			this.setState({
				myPokemon: {
					src: src,
					name: name,
					effect: effect
				}
			});
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		const { myPokemon } = this.state;
		return (
			<div className="container">
				<Header pokemon={myPokemon} />
				<Main />
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
