import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer';
import PokemonListContainer from './containers/PokemonListContainer';
import PokemonPageContainer from './containers/PokemonPageContainer';
import Footer from './components/Footer';

import style from './app.css';

export default class App extends PureComponent {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<HeaderContainer />
					<main>
						<Route exact path="/" component={PokemonListContainer}/>
						<Route path="/pokemon/:id" component={PokemonPageContainer}/>
					</main>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}
