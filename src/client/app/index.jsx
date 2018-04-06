import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			myPokemon: {
				name: 'Unknown',
				src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'
			},
		};
	}

	componentWillMount() {
		const id = Math.floor(Math.random() * 200) + 1;

		fetch(`https://www.pokeapi.co/api/v2/pokemon-form/${id}`)
			.then(res => res.json())
			.then(shapes => {
				this.setState({
					myPokemon: {
						src: shapes.sprites.front_default,
						name: shapes.name
					}
				})
			})
			.catch(err => console.log(`Failed fetch: ${err}`))
	}

	render() {
		const pokemon = this.state.myPokemon;
		return (
			<div className="container">
				<Header pokemon={pokemon} />
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
