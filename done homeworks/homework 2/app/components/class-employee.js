const Human = require('./class-human');

class Employee extends Human {
	constructor(firstName, lastName, age, salary, department) {
		super(firstName, lastName, age);
		this.salary = salary;
		this.department = department;
	}

	displayInfo() {
		return `${super.displayInfo()} Зарплата: ${this.salary}. Отдел: ${this.department}.`
	}
}

module.exports = Employee;
