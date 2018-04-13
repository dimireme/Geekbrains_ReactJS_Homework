import React from 'react';

export default function ({ weight, height, base_experience }) {
	return (
		<div>
			<h5>Basic stats:</h5>
			<ul>
				<li>Weight: {weight}</li>
				<li>Height: {height}</li>
				<li>Experience: {base_experience}</li>
			</ul>
		</div>
	)
}
