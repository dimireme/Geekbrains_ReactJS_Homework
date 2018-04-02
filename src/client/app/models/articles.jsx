import React, { Component } from 'react';

const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis vitae risus non viverra. Vivamus condimentum sed ipsum vitae ullamcorper. Vestibulum ac mi malesuada, fermentum magna non, tincidunt ligula. Nam in elit sapien. Maecenas interdum quam tellus, a malesuada augue hendrerit eget. Praesent ullamcorper non felis id pulvinar. Donec efficitur semper ultrices. Integer aliquam cursus urna ac ullamcorper. Curabitur pulvinar quis lectus at vehicula. Quisque tempus mattis diam non sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur turpis velit, semper eget consectetur nec, commodo in felis. Sed tristique elit ut quam vestibulum egestas.';

export default class Articles extends Component {

	static getRandom(times) {
		const displayText = [];

		for (let i = 1; i <= times; i++) {
			displayText.push(
				<article key={i}>
					<h2>Article { i }</h2>
					<p>{ loremText }</p>
				</article>
			);
		}

		return displayText;
	};

}
