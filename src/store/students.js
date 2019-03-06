import { observable, decorate } from 'mobx';
import mock from '../mock/students.json';

class students {
	students = mock;
	loaded = false;

	constructor() {
		this.students = Object.assign(this.students);
	}

	updateSchool(student, value) {
		let studentOutdated = this.students.findIndex(s => s.id === student.id);
		this.students[studentOutdated].school = value;
	}

	updateClass(student, value) {
		let studentOutdated = this.students.findIndex(s => s.id === student.id);
		this.students[studentOutdated].class = value;
	}

	updateAscend(student, value) {
		let studentOutdated = this.students.findIndex(s => s.id === student.id);
		this.students[studentOutdated].ascend = value;
	}

	delete(student) {
		const removeIndex = this.students
			.map(it => {
				return it.id;
			})
			.indexOf(student.id);
		this.students.splice(removeIndex, 1);
	}

	add(student) {
		const newStudent = {
			name: {
				first: student.first,
				last: student.last
			},
			picture: student.picture,
			school: student.school,
			class: student.class,
			ascend: student.ascend,
			id: new Date().valueOf()
		};
		this.students.unshift(newStudent);
	}
}

decorate(students, {
	loaded: observable,
	students: observable
});

export default (students = new students());
