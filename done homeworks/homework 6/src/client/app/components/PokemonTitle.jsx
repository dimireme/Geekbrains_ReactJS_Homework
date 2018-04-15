import React from 'react';
import { Link } from 'react-router-dom';

import style from './pokemonTitle.css';

/**
 * @param {string}  img     Pokemon's image source.
 * @param {string}  name    Pokemon's name.
 * @param {number}  id      Pokemon's id.
 * @param {boolean} noLink  Is needed a link to go to a particular Pokemon?
 */
export default function({ img, name, id, noLink=false }) {
	if(noLink) return (
		<div className={style.container}>
			<img src={img} alt={name}/> {name}
		</div>
	);

	return (
		<div className={style.container}>
			<Link to={`/pokemon/${id}`}>
				<img src={img} alt={name}/> {name}
			</Link>
		</div>
	)
}
