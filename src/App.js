import React from 'react';
import { Grommet, Box } from 'grommet';
import Students from './components/Students';
import Header from './components/Header';
import Add from './components/Add';

const theme = {
	global: {
		font: {
			family: 'Roboto',
			size: '14px',
			height: '20px'
		}
	}
};

class App extends React.Component {
	render() {
		return (
			<Grommet full={true} theme={theme} className="app">
				<Add />
				<Header />
				<Box direction="row" align="center" justify="center" animation="slideUp" background="light-2">
					<Students />
				</Box>
			</Grommet>
		);
	}
}

export default App;
