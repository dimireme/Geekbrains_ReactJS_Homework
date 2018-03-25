function* questionListGenerator() {
	'use strict';

	let result = {
		name: yield "Ваше имя?",
		age: yield "Ваш возраст?",
		isHumanitarian: ( (yield "2 + 2 * 2 = ?") == 6 ) ? false : true
	};

	return result;
}

// создаем генератор
const questionList = questionListGenerator();

// получаем первое состояние генератора
let next = questionList.next();

while(!next.done) {
	const question = next.value;
	const answer = prompt(question, "");
	next = questionList.next(answer);
}

// генератор завершился
console.log(next.value);
