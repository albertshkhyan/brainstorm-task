import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

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

/**
 * width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 */

const Users = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box width={1} display="flex" justifyContent="space-between">
				<Box display="flex" justifyContent="center" alignItems="center">
					<Typography variant="h6" gutterBottom>
						Users
					</Typography>
				</Box>
				<Box px="15px" width={1} display="flex" justifyContent="center" alignItems="center">
					{/* <Divider className={classes.divider} /> */}
					<div className={classes.divider}></div>
				</Box>
				<Box>
					<Button className={classes.btn} variant="contained" color="secondary">
						Add user
					</Button>
				</Box>
			</Box>
			{/* <Grid container direction="row" justify="space-between" alignItems="center">
				<Grid item>
					<Typography variant="h6" gutterBottom>
						Users
					</Typography>
				</Grid>
				<Grid item>
					<Divider className={classes.divider} />
				</Grid>
				<Grid item>
					<Button variant="contained" color="secondary">
						Add user
					</Button>
				</Grid>
			</Grid> */}

			{/* <Grid container spacing={1}>
				<Grid item xs>
					<Box
						style={{ width: '100%', height: '100%' }}
						display="flex"
						justifyContent="flex-start"
						alignItems="center"
					>
						<Typography variant="h6" gutterBottom>
							Users
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={9}>
					<Box
						style={{ width: '100%', height: '100%' }}
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Divider style={{ width: '100%' }} />
					</Box>
				</Grid>
				<Grid item xs>
					<Button variant="contained" color="secondary">
						Add user
					</Button>
				</Grid>
			</Grid> */}
		</div>
	);
};

export default Users;
