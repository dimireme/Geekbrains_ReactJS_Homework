import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export default class AsideMenu extends Component {
	render() {
		return (
			<div className="aside-menu">
				<Nav bsStyle="pills" stacked>
					{ generateMenu(defaultMenuList) }
				</Nav>
			</div>
		);
	}
}

function generateMenu(list) {
	return list.map( (item, index) => { return (
			<NavItem key={index} href={item.link}>
				{item.text}
			</NavItem>
		);
	});
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
		dropdown: [
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
		text: 'О компании',
		link: 'about.html'
	}
];
