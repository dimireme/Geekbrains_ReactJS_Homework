import React, { PureComponent } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import HeaderContainer from './containers/HeaderContainer';
import PokemonListContainer from './containers/PokemonListContainer';
import PokemonPageContainer from './containers/PokemonPageContainer';
import Footer from './components/Footer';

class App extends PureComponent {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<HeaderContainer />
					<main>
						<Switch>
							<Route exact path="/" component={PokemonListContainer}/>
							<Route path="/pokemon/:id" component={PokemonPageContainer}/>
						</Switch>
					</main>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
