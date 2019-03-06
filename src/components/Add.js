import React from 'react';
import { observer } from 'mobx-react';
import store from '../store/students.js';
import '../styles/master.css';
import { Button, Heading, Box, TextInput } from 'grommet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-animated-modal';

class Add extends React.Component {
	state = {
		showModal: false
	};

	notify = err => toast.error(`😱 ${err}`);

	render() {
		return (
			<React.Fragment>
				<div>
					<Modal visible={this.state.showModal} closemodal={() => this.setState({ showModal: false })} type="zoomIn">
						<Box>
							<Box pad="small">
								<Heading level={4} className="add-header">
									Add a new student
								</Heading>
							</Box>

							<Box direction="row" pad="small">
								<TextInput
									className="add-input"
									placeholder="First Name"
									onChange={e => this.setState({ first: e.target.value })}
								/>
								<TextInput
									className="add-input"
									placeholder="Last Name"
									onChange={e => this.setState({ last: e.target.value })}
								/>
							</Box>
							<Box direction="column" pad="small">
								<TextInput
									className="add-input"
									placeholder="Picture url"
									onChange={e => this.setState({ picture: e.target.value })}
								/>
								<TextInput
									className="add-input"
									placeholder="School"
									onChange={e => this.setState({ school: e.target.value })}
								/>
								<TextInput
									className="add-input"
									placeholder="Class"
									onChange={e => this.setState({ class: e.target.value })}
								/>
								<TextInput
									className="add-input"
									placeholder="Average"
									onChange={e => this.setState({ ascend: e.target.value })}
								/>
							</Box>
							<Button
								onClick={() =>
									this.state.first &&
									this.state.last &&
									this.state.school &&
									this.state.picture &&
									this.state.class &&
									this.state.ascend
										? store.add(this.state) & this.setState({ showModal: false })
										: this.notify('Please fill all fields!')}
								className={
									this.state.first &&
									this.state.last &&
									this.state.school &&
									this.state.picture &&
									this.state.class &&
									this.state.ascend
										? 'create-btn'
										: 'create-btnfalse'
								}
							>
								Add
							</Button>
						</Box>
					</Modal>
				</div>
				<Button className="student-add" onClick={() => this.setState({ showModal: true })}>
					+
				</Button>
				<ToastContainer />
			</React.Fragment>
		);
	}
}

Add = observer(Add);
export default Add;
