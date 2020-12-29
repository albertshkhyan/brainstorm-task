import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: 300,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));

export default function SearchBar() {
	const classes = useStyles();

	const [values, setValues] = React.useState({
		search: '',
	});
	console.log(values);

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	return (
		<Paper elevation={0} className={classes.root}>
			<TextField
				onChange={handleChange('search')}
				type="search"
				label="Search"
				id="standard-search"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								// onClick={handleClickShowPassword}
								aria-label="Toggle password visibility"
							>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
				className={classes.input}
			/>
		</Paper>
	);
}
