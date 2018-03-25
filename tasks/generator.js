function* questionListGenerator() {
	'use strict';

	const answer1 = yield "Ваше имя?";
	const answer2 = yield "Ваш возраст?";
	const answer3 = yield "2 + 2 * 2 = ?"

	return {
		name: answer1,
		age: answer2,
		isHumanitarian: (answer3 == 6) ? false : true
	}
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
