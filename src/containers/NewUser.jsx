import React from 'react';
import TitleDivider from './../components/TitleDivider';
import Box from '@material-ui/core/Box';
import UserForm from './../components/UserForm';

const NewUser = () => {
	return (
		<div>
			<Box width={1} display="flex" justifyContent="space-between">
				<TitleDivider title="New users" />
			</Box>
			<UserForm />
		</div>
	);
};

export default NewUser;
