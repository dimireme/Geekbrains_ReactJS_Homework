import React from 'react';

export default function ({ weight, height, base_experience, stats, abilities, held_items }) {
	return (
		<div>
			<h5>Basic stats:</h5>
			<ul>
				<li>Weight: {weight}</li>
				<li>Height: {height}</li>
				<li>Experience: {base_experience}</li>
			</ul>

			<h5>Stats:</h5>
			<ul>
				{stats.map((stat, i) => <li key={i}>{stat.stat.name} : {stat.base_stat}</li>)}
			</ul>

			<h5>Available abilities:</h5>
			<ul>
				{abilities.map((ability, i) => <li key={i}>{ability.ability.name}</li>)}
			</ul>

			<h5>Held items:</h5>
			<ul>
				{held_items.map((item, i) => <li key={i}>{item.item.name}</li>)}
			</ul>
		</div>
	)
}
