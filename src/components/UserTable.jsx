import React from 'react';

import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import IconButton from '@material-ui/core/IconButton';
import TableContainer from '@material-ui/core/TableContainer';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import SwitchButton from './SwitchButton';
import Preloader from './Preloader';

import { useDispatch, useSelector } from 'react-redux';
import { sortingSG, deleteUserSG } from 'app/reducers/users';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: '#F1F3F5',
		color: theme.palette.common.black,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const headCells = [
	{ id: 'photo', numeric: false, disablePadding: true, label: 'Photo' },
	{ id: 'name', numeric: false, disablePadding: false, label: 'Name' },
	{ id: 'location', numeric: false, disablePadding: false, label: 'Location' },
	{ id: 'registeredDate', numeric: true, disablePadding: false, label: 'Registerd date' },
	{ id: 'lastActiveDate', numeric: false, disablePadding: false, label: 'Last active date' },
	{ id: 'email', numeric: false, disablePadding: false, label: 'Email' },
	{ id: 'action', numeric: false, disablePadding: false, label: 'Action' },
];

function EnhancedTableHead(props) {
	const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<StyledTableCell padding="checkbox">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ 'aria-label': 'select all desserts' }}
					/>
				</StyledTableCell>
				{headCells.map((headCell) => (
					<StyledTableCell
						key={headCell.id}
						// align={headCell.numeric ? 'right' : 'left'}
						align="left"
						padding={headCell.disablePadding ? 'none' : 'default'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<span className={classes.visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</span>
							) : null}
						</TableSortLabel>
					</StyledTableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	classes: PropTypes.object.isRequired,
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	table: {
		minWidth: 750,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},
}));

export default function EnhancedTable() {
	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('name');
	const [selected, setSelected] = React.useState([]);

	const dispatch = useDispatch();

	const usersData = useSelector((state) => state.users.users);
	const isLoading = useSelector((state) => state.users.isLoading);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		if (property === 'action') {
			return;
		}
		dispatch(sortingSG(property, order)); //sort, order
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const deleteUser = (userId) => {
		dispatch(deleteUserSG(userId));
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelecteds = usersData && usersData.map((n) => n.name);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	};

	const isSelected = (name) => selected.indexOf(name) !== -1;

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				{/* <EnhancedTableToolbar numSelected={selected.length} /> */}
				<TableContainer>
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						// size={dense ? 'small' : 'medium'}
						aria-label="enhanced table"
					>
						<EnhancedTableHead
							classes={classes}
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={10}
						/>
						<TableBody>
							{/* {stableSort(usersData, getComparator(order, orderBy)) */}

							{isLoading && (
								<TableRow align="center">
									<TableCell rowSpan={4} colSpan={10} align="center">
										<Box display="flex" justifyContent="center" my={3}>
											<Preloader />
										</Box>
									</TableCell>
								</TableRow>
							)}

							{!isLoading &&
								usersData &&
								usersData.map((row, index) => {
									const isItemSelected = isSelected(row.name);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row.id}
											selected={isItemSelected}
										>
											<TableCell padding="checkbox">
												<Checkbox
													onClick={(event) => handleClick(event, row.name)}
													checked={isItemSelected}
													inputProps={{ 'aria-labelledby': labelId }}
												/>
											</TableCell>
											<TableCell component="th" id={labelId} scope="row" padding="none">
												<Avatar alt="avatar" src={row.photo} />
											</TableCell>
											<TableCell align="left">{row.name}</TableCell>
											<TableCell align="left">{row.location}</TableCell>
											<TableCell align="left">{row.lastActiveDate}</TableCell>
											<TableCell align="left">{row.registeredDate}</TableCell>
											<TableCell align="left">{row.email}</TableCell>
											<TableCell align="center">
												{' '}
												<Box width={1} display="flex" justifyContent="space-between">
													<Box display="flex" justifyContent="center" alignItems="center">
														<SwitchButton row={row} disabled={row.disabled} />
													</Box>
													<Box display="flex" justifyContent="center" alignItems="center">
														<IconButton
															onClick={() => deleteUser(row.id)}
															aria-label="delete"
															className={classes.margin}
														>
															<DeleteIcon style={{ color: 'red' }} />
														</IconButton>
													</Box>
												</Box>
											</TableCell>
										</TableRow>
									);
								})}
							{/* {emptyRows > 0 && (
								<TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
									<TableCell colSpan={6} />
								</TableRow>
							)} */}
						</TableBody>
					</Table>
				</TableContainer>
				{/* <TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/> */}
			</Paper>
			{/* <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Dense padding" /> */}
		</div>
	);
}
