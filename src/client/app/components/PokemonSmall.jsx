import React from 'react';

export default function ({ src, name }) {
	return (
		<div className="pokemon-small">
			<img src={src} alt={name}/> {name}
		</div>
	);
}
