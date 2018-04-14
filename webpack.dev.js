const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');

module.exports = merge(common, {

	// Выходной bundle будет только минимизирован.
	mode: 'development',

	// Выбор стиля source-map файлов.
	devtool: 'source-map',

	// Конфиг для webpack-dev-server. В contentBase указывается путь, который будет доступен по http://localhost:port
	// Команда на запуск сервера прописана в package.json: `npm run start:dev`
	devServer: {
		contentBase: path.join(__dirname, 'src', 'client', 'dev'),
		compress: true,
		port: 9000,
	},

	module: {
		rules: [
			// style-loader собирает все стили в head выходного html файла.
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							include: /node_modules/,
							localIdentName: '[path][name]__[local]--[hash:base64:5]'
						}
					}
				]
			}
		]
	}
});
