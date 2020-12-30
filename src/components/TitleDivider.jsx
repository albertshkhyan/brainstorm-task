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

const useStyles = makeStyles({
	divider: {
		width: '100%',
		background: 'black',
		height: '1px',
	},
	Typography: {
		minWidth: '93px',
	},
});

const TitleDivider = ({ title }) => {
	const classes = useStyles();

	return (
		<>
			<Box display="flex" justifyContent="center" alignItems="center">
				<Typography className={classes.Typography} variant="h6" gutterBottom>
					{title}
				</Typography>
			</Box>
			<Box px="15px" width={1} display="flex" justifyContent="center" alignItems="center">
				<div className={classes.divider}></div>
			</Box>
		</>
	);
};

export default TitleDivider;
