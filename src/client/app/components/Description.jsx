import React from 'react';

export default function(effects) {
	if(!effects) {
		return (
			<p>Loading...</p>
		);
	}
	return (
		<div>
			<p>{ effects.short_effect }</p>
			<p>{ effects.effect }</p>
		</div>
	);
}
