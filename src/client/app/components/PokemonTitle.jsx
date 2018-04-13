import React from 'react';
import { Link } from 'react-router-dom';

export default function({ img, name, id, noLink=false }) {
	if(noLink) return (
		<div>
			<img src={img} alt={name}/> {name}
		</div>
	);

	return (
		<div>
			<Link to={`/pokemon/${id}`}>
				<img src={img} alt={name}/> {name}
			</Link>
		</div>
	)
}
