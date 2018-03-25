/*
 При помощи генератора написать функцию - анкету, которая запрашивает у
 пользователя на ввод параметры и передаёт их в генератор. В конце, когда генератор
 завершается, он должен вернуть все введённые входные параметры в виде объекта.
 Этот объект нужно вывести в консоли.
 */

function* questionListGenerator() {
	'use strict';

	let result = {
		name: yield "Ваше имя?",
		age: yield "Ваш возраст?",
		isHumanitarian: (yield "2 + 2 * 2 = ?") !== '6'
	};

	return result;
}

// создаем генератор
const questionList = questionListGenerator();

// получаем первое состояние генератора
let next = questionList.next();

// крутим генератор пока он не завершится
while(!next.done) {
	const question = next.value;
	const answer = prompt(question, "");
	next = questionList.next(answer);
}

// генератор завершился
console.log(next.value);
