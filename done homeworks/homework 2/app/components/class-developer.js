const Employee = require('./class-employee');

class Developer extends Employee {
	constructor(...args) {
		super(...args);
	}
}

module.exports = Developer;
