import React from 'react';
import { Box, Heading, Clock } from 'grommet';

class Header extends React.Component {
	render() {
		return (
			<Box direction="row" elevation="medium" align="center" justify="between" animation="slideDown" background="white">
				<Box pad="medium">
					<Heading level={2} margin="none">
						Educate
					</Heading>
					<Heading level={4} margin="none">
						Student manager
					</Heading>
				</Box>
				<Box pad="medium">
					<Clock type="digital" />
				</Box>
			</Box>
		);
	}
}

export default Header;
