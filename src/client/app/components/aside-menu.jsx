import React, { Component } from 'react';

export default class SideMenu extends Component {
	render() {
		return <nav className="aside-menu">
			{ generateMenu(defaultMenuList) }
		</nav>
	}
}

function generateMenu(list) {
	const listItems = list.map( (item, index) => {
		let li;
		if(item.dropDown) {
			const dropDownMenu = item.dropDown.map( function(item, index) {
				return <a key={"drop-down-" + index} className="dropdown-item" href={item.link}>{item.text}</a>
			});

			li = <li key={index} className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" data-toggle="dropdown" href={item.link} role="button" aria-haspopup="true" aria-expanded="false">{item.text}</a>
				<div className="dropdown-menu">
					{ dropDownMenu }
				</div>
			</li>
		} else {
			li = <li key={index} className="nav-item" >
				<a className="nav-link" href={item.link}>{item.text}</a>
			</li>
		}

		return li;
	});

	return <ul className="nav nav-pills nav-fill">{ listItems }</ul>
}

// Список меню по умолчанию
const defaultMenuList = [
	{
		text: 'Главная',
		link: 'index.html'
	},
	{
		text: 'Категории',
		link: 'category/index.html',
		// TODO: Сделать обработку подобного элемента списка:
		dropDown: [
			{
				text: 'Декоративные рога',
				link: 'category/decorativeHorns.html'
			},
			{
				text: 'Эксклюзивные копыта',
				link: 'category/exclusiveHooves.html'
			}
		]
	},
	{
		text: 'О нас',
		link: 'about.html'
	}
];