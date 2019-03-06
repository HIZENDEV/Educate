import React from 'react';
import { observer } from 'mobx-react';
import store from '../store/students.js';
import '../styles/master.css';
import { Button } from 'grommet';
import { Organization, Group, Ascend } from 'grommet-icons';

class Students extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			updatable: false,
			name: props.name,
			status: props.status
		};
	}

	StudentsTable() {
		const list = store.students.map(student => (
			<div className="student" key={student.id}>
				<div className="student-top">
					<img className="student-img" alt={student.name.first} src={student.picture} />
					<h2 className="student-name">
						{student.name.first} {student.name.last}
					</h2>
				</div>
				<div className="student-info">
					<div className="student-line">
						<Organization color="plain" size="medium" />
						{this.state.edit ? (
							<input
								className="student-input"
								value={student.school}
								onChange={e => store.updateSchool(student, e.target.value)}
							/>
						) : (
							<span className="">{student.school}</span>
						)}
					</div>
					<div className="student-line">
						<Group color="plain" size="medium" />
						{this.state.edit ? (
							<input
								className="student-input"
								value={student.class}
								onChange={e => store.updateClass(student, e.target.value)}
							/>
						) : (
							<span className="">{student.class}</span>
						)}
					</div>
					<div className="student-line">
						<Ascend color="plain" size="medium" />
						{this.state.edit ? (
							<input
								className="student-input"
								value={student.ascend}
								onChange={e => store.updateAscend(student, e.target.value)}
							/>
						) : (
							<span className="">{student.ascend}</span>
						)}
					</div>
					<div className="student-action">
						<Button className="student-edit" onClick={() => this.setState({ edit: !this.state.edit })}>
							{this.state.edit ? 'Save' : 'Edit'}
						</Button>
						<Button className="student-delete" onClick={() => store.delete(student)}>
							Delete
						</Button>
					</div>
				</div>
			</div>
		));
		return <div className="student-list">{list}</div>;
	}

	render() {
		return this.StudentsTable();
	}
}

Students = observer(Students);
export default Students;
