import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import UserTable from 'components/UserTable';
import Paginate from '../components/Paginate';
import useOnce from './../utils/use-once';
import { useDispatch } from 'react-redux';
import { getUsersSG } from '../app/reducers/users';
import { useHistory } from 'react-router-dom';
import TitleDivider from './../components/TitleDivider';

const useStyles = makeStyles({
	btn: {
		minWidth: '100px',
	},
});

const Users = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	useOnce(() => {
		// getUsers;
		dispatch(getUsersSG());
	});

	const addUserHandler = () => {
		return history.push('/new_user');
	};
	return (
		<div className={classes.root}>
			<Box my={3}>
				<Box width={1} display="flex" justifyContent="space-between">
					<TitleDivider title="Users" />
					<Box>
						<Button onClick={addUserHandler} className={classes.btn} variant="contained" color="secondary">
							Add user
						</Button>
					</Box>
				</Box>
			</Box>
			<UserTable />
			<Box my={3}>
				<Paginate />
			</Box>
		</div>
	);
};

export default Users;
