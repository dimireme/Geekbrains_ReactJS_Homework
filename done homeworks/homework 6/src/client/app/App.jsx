import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer';
import PokemonListContainer from './containers/PokemonListContainer';
import PokemonPageContainer from './containers/PokemonPageContainer';
import Footer from './components/Footer';

// Локальные стили подключаем через style.class.
// Стили от bootstrap подключаем как есть по документации.
import styles from './app.css';

export default class App extends PureComponent {
	render() {
		return (
			<BrowserRouter>
				<div className={`${styles.container} container`}>
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
