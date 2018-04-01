const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src', 'client', 'app', 'index'),
	output: {
		path: path.join(__dirname, 'src', 'client', 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: path.join(__dirname, 'src', 'client', 'app'),
				use: 'babel-loader'
			}
		]
	},
	mode: 'development'
};
