module.exports = function(text) {

	// Создаем параграф с сообщением
	let p = document.createElement('p');
	p.textContent = text;

	// Оборачиваем параграф в div и отрисовываем на странице
	let div = document.createElement('div');
	document.body.appendChild(div).appendChild(p);

	// К блоку добавляем событие onClick
	div.addEventListener('click', function(){
		// Создаем параграф с текущей датой
		const p = document.createElement('p');
		p.textContent = new Date();

		// Добавляем дату внутри кликабельного элемента
		this.appendChild(p);
	});

};
