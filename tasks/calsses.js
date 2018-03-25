/*
 Необходимо написать иерархию классов вида:
 Human -> Employee -> Developer
 Human -> Employee -> Manager

 Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников
 (разработчиков), а также методы по удалению/добавлению разработчиков.

 Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для
 изменения менеджера (имеется ввиду возможность назначить другого менеджера).

 У класса Human должны быть следующие параметры: name (строка), age (число),
 dateOfBirth (строка или дата).

 У класса Employee должны присутствовать параметры: salary (число), department
 (строка).

 В классе Human должен присутствовать метод displayInfo, который возвращает строку
 со всеми параметрами экземпляра Human.

 В классе Employee должен быть реализовать такой же метод (displayInfo), который
 вызывает базовый метод и дополняет его параметрами из экземпляра Employee.
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
	constructor(...args) {
		super(...args);
		this._manager = undefined;
	}

	get manager() {
		return this._manager;
	}

	set manager(newManager) {
		this._manager = newManager;
	}
}

class Manager extends Employee {
	constructor(...args) {
		super(...args);
		this._developers = [];
	}

	get developers() {
		return this._developers;
	}

	addDeveloper(newDeveloper) {
		const developerIndex = this._developers.indexOf(newDeveloper);
		if (developerIndex === -1) {
			this._developers.push(newDeveloper);
		}
	}

	deleteDeveloper(developer) {
		const developerIndex = this._developers.indexOf(developer);
		if (developerIndex !== -1) {
			this._developers.splice(developerIndex, 1);
		}
	}
}

let vasya = new Manager('Vasya', 29, '20.09.1988', 50000, 'Отдел разработки');
let petya = new Developer('Petya', 25, '21.09.1992', 25000, 'Отдел разработки');
let kolya = new Developer('Kolya', 26, '22.09.1992', 26000, 'Отдел разработки');

petya.manager = vasya;

vasya.addDeveloper(petya);
vasya.addDeveloper(kolya);
vasya.deleteDeveloper(petya);
