import React, { PureComponent } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

/*import PokemonListContainer from '../containers/PokemonListContainer';
import PokemonPageContainer from '../containers/PokemonPageContainer';*/

export default class Main extends PureComponent {
	render() {
		return (
			<main>
{/*				<Route exact path="/" component={PokemonListContainer}/>
				<Route path="/pokemon/:id" component={PokemonPageContainer}/>*/}
				<Link to="/">Home</Link><br/>
				<Link to="/about">About</Link>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
				</Switch>
			</main>
		);
	}
}

const Home = () => (
	<div>
		<h2>Hello from Home component</h2>
	</div>
);

const About = () => (
	<div>
		<h2>Hello from About component</h2>
	</div>
);
