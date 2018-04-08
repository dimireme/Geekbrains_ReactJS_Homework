const path = require('path');

module.exports = {
	// Используем инструмент разработчика source-map для отладки ошибок в исходниках.
	devtool: 'source-map',

	// Точка входа приложения
	entry: ['babel-polyfill', path.join(__dirname, 'src', 'client', 'app', 'index')],

	// Результат сборки
	output: {
		path: path.join(__dirname, 'src', 'client', 'public'),
		filename: 'bundle.js'
	},

	// Какие расширения файлов могут подключаться в проекте через import
	resolve: {
		extensions: ['.js', '.jsx']
	},

	// Правила сборки модулей
	// Для файлов с шаблоном {test} внутри директории {include} использовать {use}
	// Babel-loader помогает сборщику проекта читать файлы jsx, чтобы потом получить итоговый js файл
	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: path.join(__dirname, 'src', 'client', 'app'),
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				loaders: ['style-loader', 'css-loader'],
			}
		]
	},

	// Конфиг для webpack-dev-server. В contentBase указывается путь, который будет доступен по http://localhost:port
	// Команда на запуск сервера прописана в package.json:
	// npm run start:dev
	devServer: {
		contentBase: path.join(__dirname, 'src', 'client', 'public'),
		compress: true,
		port: 9000
	},

	// enable defaults for development environment
	mode: 'development'

};
