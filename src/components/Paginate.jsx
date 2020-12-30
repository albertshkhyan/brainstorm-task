import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { paginateSG } from './../app/reducers/users';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function Paginate() {
	const classes = useStyles();
	const totalPages = useSelector((state) => state.users.totalPages);
	// const [page, setPage] = React.useState(1);
	const currentPage = useSelector((state) => state.users.currentPage);
	const dispatch = useDispatch();
	const handleChange = (event, page) => {
		// setPage(value);
		dispatch(paginateSG(page));
	};

	return (
		<div className={classes.root}>
			{/* <Pagination count={10} variant="outlined" shape="rounded" />{' '} */}
			{useMemo(() => {
				return <Pagination count={totalPages} page={currentPage} onChange={handleChange} />;
			}, [totalPages, currentPage])}
		</div>
	);
}
