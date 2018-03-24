function loop(times=0, callback=null) {
	if (!callback) {
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