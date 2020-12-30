import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';

import SwitchButton from './SwitchButton';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: '#F1F3F5',
		color: theme.palette.common.black,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
// 	root: {
// 		'&:nth-of-type(odd)': {
// 			backgroundColor: theme.palette.action.hover,
// 		},
// 	},
// }))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
// 	return { name, calories, fat, carbs, protein };
// }
////fake data
// function createData(photo, name, location, register_date, last_active_datae) {
// 	return { photo, name, location, register_date, last_active_datae };
// }
// const rows = [
// 	createData('Some Image', 159, 6.0, 24, 4.0),
// 	createData('Some Image', 237, 9.0, 37, 4.3),
// 	createData('Some Image', 262, 16.0, 24, 6.0),
// 	createData('Some Image', 305, 3.7, 67, 4.3),
// 	createData('Some Image', 356, 16.0, 49, 3.9),
// ];
////fake data

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

export default function UserTable() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="customized table">
				<TableHead>
					<TableRow>
						<StyledTableCell>Photo</StyledTableCell>
						<StyledTableCell align="left">Name</StyledTableCell>
						<StyledTableCell align="left">Loaction</StyledTableCell>
						<StyledTableCell align="left">Register date</StyledTableCell>
						<StyledTableCell align="left">Last active date</StyledTableCell>
						<StyledTableCell align="left">Email</StyledTableCell>
						<StyledTableCell align="center">Actions</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{usersData.map((row) => (
						<TableRow key={row.id}>
							<StyledTableCell component="th" scope="row">
								<Avatar alt="avatar" src={row.photo} />
							</StyledTableCell>
							<StyledTableCell align="left">{row.name}</StyledTableCell>
							<StyledTableCell align="left">{row.location}</StyledTableCell>
							<StyledTableCell align="left">{row.registeredDate}</StyledTableCell>
							<StyledTableCell align="left">{row.lastActiveDate}</StyledTableCell>
							<StyledTableCell align="left">{row.email}</StyledTableCell>
							<StyledTableCell align="center">
								<Box width={1} display="flex" justifyContent="space-between">
									<Box display="flex" justifyContent="center" alignItems="center">
										<SwitchButton disabled={row.disabled} />
									</Box>
									<Box display="flex" justifyContent="center" alignItems="center">
										<IconButton aria-label="delete" className={classes.margin}>
											<DeleteIcon style={{ color: 'red' }} />
										</IconButton>
									</Box>
								</Box>
							</StyledTableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
