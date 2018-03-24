/*
 Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников
 (разработчиков), а также методы по удалению/добавлению разработчиков.

 Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для
 изменения менеджера (имеется ввиду возможность назначить другого менеджера).
 */

class Human {
	constructor(name, age, dateOfBirth) {
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
	}

	displayInfo() {
		return `Имя: ${this.name}. Возраст: ${this.age}. Дата рождения: ${this.dateOfBirth}.`;
	}
}

class Employee extends Human {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth);
		this.salary = salary;
		this.department = department;
	}

	displayInfo() {
		return super.displayInfo() + ` Зарплата: ${this.salary}. Отдел: ${this.department}.`
	}
}

class Developer extends Employee {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth, salary, department);
	}
}

class Manager extends Employee {
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth, salary, department);
	}
}



let vasya = new Employee('Vasya', 29, '20.09.1988', 25000, 'Служба охраны');

console.log(vasya.displayInfo());

/*
 Необходимо написать иерархию классов вида:
 Human -> Employee -> Developer
 Human -> Employee -> Manager

 У класса Human должны быть следующие параметры: name (строка), age (число),
 dateOfBirth (строка или дата)

 В классе Human должен присутствовать метод displayInfo, который возвращает строку
 со всеми параметрами экземпляра Human.

 У класса Employee должны присутствовать параметры: salary (число), department
 (строка)

 В классе Employee должен быть реализовать такой же метод (displayInfo), который
 вызывает базовый метод и дополняет его параметрами из экземпляра Employee

 Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo
 класса Employee написать: super.displayInfo(), это вызовет метод disaplyInfo класс
 Human и вернет строку с параметрами Human'a.
 */