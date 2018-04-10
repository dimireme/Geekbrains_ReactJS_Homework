import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

export default class Pokemon extends PureComponent {
	static propTypes = {
		pokemon: PropTypes.shape({
			img: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			id: PropTypes.number,
			detailsSource: PropTypes.string.isRequired,
			details: PropTypes.shape({
				short_effect: PropTypes.string,
				effect: PropTypes.string
			})
		}),
		detailsShowHandler: PropTypes.func.isRequired,
		detailsHideHandler: PropTypes.func.isRequired,
		isLoaded: PropTypes.bool
	};

	onShowClick = (e) => {
		const { detailsShowHandler } = this.props;

		if (typeof detailsShowHandler === 'function') {
			detailsShowHandler(this.props.pokemon.detailsSource);
		}
		e.preventDefault();
	};

	onHideClick = (e) => {
		const { detailsHideHandler } = this.props;

		if (typeof detailsHideHandler === 'function') {
			detailsHideHandler();
		}

		e.preventDefault();
	};

	render() {
		const { pokemon, isLoaded } = this.props;
		const { name, img, details } = pokemon;

		// если нет деталей, но данные загружены, значит запроса на сервер не было. Отображаем ссылку для запроса.
		// если нет деталей, но данные не загружены, то запрос отправлен, выводим 'Loading...'
		// если есть детали и данные загружены, то пришел ответ с сервера, выводим данные.
		// если есть детали, но данные не загружены, значит запрос был давно, пользователь нажал кнопку 'Скрыть детали'.
		//      Чтобы скрыть детали, меняем флаг isLoaded.
		//      Данные сохраняются в state компонента, посторно на сервер запрос не отправляется.
		return (
			<div className="card m-2">
				<div className="card-body">
					<h5 className="card-title"><img src={img} alt={name}/> {name}</h5>
					{ (!details) ? (isLoaded ? <a href="#" className="card-link" onClick={this.onShowClick}>Show details...</a>
											 : <p className="card-text">Loading details...</p>)
 						         : (isLoaded ? (<div>
													<Description {...details}/>
													<a href="#" className="card-link" onClick={this.onHideClick}>Hide details</a>
												</div>)
							                 : <a href="#" className="card-link" onClick={this.onShowClick}>Show details...</a>)
					}
				</div>
			</div>
		)
	}
}
