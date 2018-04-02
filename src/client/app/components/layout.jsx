import React, { Component } from 'react';

// Вложенные компоненты
import Header from './header';

import AsideMenu from './aside-menu';
import Main from './main';
import Footer from './footer';

// Файл моделей для работы со статьями
import Articles from '../models/articles';

export default class Layout extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<div className="main-container">

					<AsideMenu />
					<Main content={Articles.getRandom(2)} />

				</div>
				<Footer />
			</div>
		);
	}
}




/*
 Реализовать шаблон главной страницы блога. Реализовать это необходимо в стиле react, то
 есть на выходе у Вас должен быть компонент Layout, который задаёт структуру страниц,
 главная страница (например, MainPage), на которой будет отображаться наша заглушка со
 статьями, а также элементы: menu и login.
 На странице должны присутствовать следующие элементы:
 1. Меню навигации
 2. Кнопка для логина
 3. Место для контента страницы
 4. *(Опционально) Боковое/нижнее меню
 5. *Используя bootstrap, реализуйте поведение для нажатие на кнопку login, а именно:
 при нажатии на кнопку login должно показываться модальное окно, где можно ввести
 логин и пароль для авторизации на сайте. При этом возможно использовать как
 react-bootstrap пакет, так и чистый bootstrap.
 */