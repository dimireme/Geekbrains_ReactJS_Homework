/*
 Написать функцию loop, которая будет принимать параметры: times (значение по
 умолчанию = 0), callback (значение по умолчанию = null) и будет в цикле (times раз),
 вызывать функцию callback. Если функцию не передана, то цикл не должен
 отрабатывать ни разу. Покажите применение этой функции.
 */

function loop(times=0, callback=null) {
	if (typeof(callback) !== "function") {
		return;
	}

	for(let i=0; i<times; i++) {
		callback();
	}
}

function sayHello() {
	document.write('Hello! <br>');
}

loop(5, sayHello);
