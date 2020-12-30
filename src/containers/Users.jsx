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

const useStyles = makeStyles({
	root: {
		// width: '100%',
		// maxWidth: 500,
	},
	divider: {
		width: '100%',
		background: 'black',
		height: '1px',
	},
	btn: {
		minWidth: '100px',
	},
});

const Users = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useOnce(() => {
		// getUsers;
		dispatch(getUsersSG());
	});
	return (
		<div className={classes.root}>
			<Box my={3}>
				<Box width={1} display="flex" justifyContent="space-between">
					<Box display="flex" justifyContent="center" alignItems="center">
						<Typography variant="h6" gutterBottom>
							Users
						</Typography>
					</Box>
					<Box px="15px" width={1} display="flex" justifyContent="center" alignItems="center">
						<div className={classes.divider}></div>
					</Box>
					<Box>
						<Button className={classes.btn} variant="contained" color="secondary">
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
