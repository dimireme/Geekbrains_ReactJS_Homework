module.exports = class Human {
	constructor(name, age, dateOfBirth) {
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
	}

	displayInfo() {
		return `Имя: ${this.name}. Возраст: ${this.age}. Дата рождения: ${this.dateOfBirth}.`;
	}
}
