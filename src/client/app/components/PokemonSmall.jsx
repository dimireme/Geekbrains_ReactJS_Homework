import React from 'react';

export default function ({ img, name }) {
	return (
		<div className="pokemon-small">
			<img src={img} alt={name}/> {name}
		</div>
	);
}
