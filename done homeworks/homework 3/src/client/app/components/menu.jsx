import React, { Component } from 'react';
import { Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';

export default class Menu extends Component {
	render() {
		return (
			<div className="page-menu">
				<Nav bsStyle="pills" justified>
					{ generateMenu(defaultMenuList) }
				</Nav>
			</div>
		);
	}
}

function generateMenu(list) {
	return list.map( (item, index) => {
		let li;
		if(item.dropdown) {
			const dropdownMenu = item.dropdown.map( function(item, index) {
				return (
					<MenuItem href={item.link} key={"dropdown-"+index}>
						{item.text}
					</MenuItem>
				);
			});

			li = (
				<NavDropdown key={index} id={"dropdown-"+item.dropdown} title={item.text}>
					{ dropdownMenu }
				</NavDropdown>
			);
		} else {
			li = (
				<NavItem key={index} href={item.link}>
					{item.text}
				</NavItem>
			);
		}

		return li;
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
