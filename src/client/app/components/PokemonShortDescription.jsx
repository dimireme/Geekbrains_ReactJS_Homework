import React from 'react';

/**
 * @param {number}  weight              Pokemon's weight.
 * @param {number}  height              Pokemon's height.
 * @param {number}  base_experience     Base Pokemon's experience.
 */
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
