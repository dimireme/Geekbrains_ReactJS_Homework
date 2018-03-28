class Human {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	set fullname(fullName) {
		[this.firstName, this.lastName] = fullName.split(' ');
	}

	displayInfo() {
		return `Имя: ${this.fullName}. Возраст: ${this.age}.`;
	}
}

module.exports = Human;
