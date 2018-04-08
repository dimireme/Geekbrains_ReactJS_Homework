import React from 'react';

export default function ({short_effect, effect}) {
	console.log(arguments);
	return (
		<div>
			<p>{ short_effect} </p>
			<p>{ effect} </p>
		</div>
	)
}