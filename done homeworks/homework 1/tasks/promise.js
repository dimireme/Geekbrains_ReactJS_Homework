/*
 Написать цикл, который создаёт массив промисов, внутри каждого промиса
 происходит обращение к ресурсу ( https://jsonplaceholder.typicode.com/users/number) , где
 вместо number подставляется число от 1 до 10, в итоге должно получиться 10 промисов.
 Следует дождаться выполнения загрузки всеми промисами и далее вывести массив
 загруженных данных
 */

const promisesArr = [];

for(let i=1; i<=10; i++) {
	const promise = fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
		.then( response => response.json());

	promisesArr.push(promise);
}

Promise.all(promisesArr).then( users => console.log(users));
