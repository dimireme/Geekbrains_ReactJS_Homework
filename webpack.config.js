const path = require('path');

module.exports = {

	// Точка входа приложения
	entry: path.join(__dirname, 'src', 'client', 'app', 'index'),

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
			}
		]
	},

	// enable defaults for development environment
	mode: 'development'

};
