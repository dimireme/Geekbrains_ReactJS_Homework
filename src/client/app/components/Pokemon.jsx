import React from 'react';

export default function ({ img, name }) {
	return (
		<div>
			<img src={img} alt={name}/> {name}
		</div>
	);
}
