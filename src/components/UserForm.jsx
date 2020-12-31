import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
//
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PhotoIcon from '@material-ui/icons/Photo';

import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { createUserSG, editUserSG } from './../app/reducers/users';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			// width: "25ch",
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
	},
	button: {
		margin: theme.spacing(1),
		textTransform: 'none',
	},
	userName: {
		width: '100%',
	},
	saveButton: {
		width: '150px',
	},
	uploadButton: {
		padding: '13px 60px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	uploadInput: {
		display: 'none',
	},
}));

export default function UserForm() {
	const classes = useStyles();
	const isLoading = useSelector((state) => state.users.isLoading);
	let { userId } = useParams();

	const dispatch = useDispatch();

	const [fileData, setFileData] = useState(null);
	const [fileName, setFileName] = useState('');

	const formik = useFormik({
		initialValues: {
			name: '',
			location: '',
			email: '',
		},
		onSubmit: (values) => {
			formik.resetForm({
				values: { name: '', email: '', location: '' },
			});
			setFileData(null);
			if (!userId) {
				//# check on whcih page now - create page
				dispatch(createUserSG(values, fileData));
			} else {
				//# edit page
				dispatch(editUserSG(userId, values, fileData));
			}
		},
	});

	const handleFileInputChange = (event) => {
		//#when click save(submit) button we must send file on reducer
		const files = event.target.files[0];
		setFileData(files);
		setFileName(files.name);
	};

	return (
		// <form className={classes.root} noValidate autoComplete="off">
		<form className={classes.root} onSubmit={formik.handleSubmit}>
			<Paper className={classes.paper}>
				<Grid className={classes.TextFields_Container} container direction="column" justify="center">
					<Grid item xs={6}>
						<TextField
							value={formik.values.name}
							className={classes.userName}
							type="text"
							name="name"
							onChange={formik.handleChange}
							id="outlined-basic"
							label="User name"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={3}>
						{/**SELECT IMAGE INPUT */}
						<input
							// disabled={isSubmitting || fileState.status === 'uploading'}
							onChange={handleFileInputChange}
							accept="image/*"
							className={classes.uploadInput}
							id="contained-button-file"
							multiple={false}
							type="file"
						/>
						<label htmlFor="contained-button-file">
							<Button
								disabled={isLoading}
								type="button" //for not send request
								color="secondary"
								fullWidth
								mycolor="orange" //color in mui reserver props, give warning when use color props
								className={`${classes.button} ${classes.uploadButton}`}
								variant="outlined"
								component="div"
								// startIcon={<PhotoIcon />}
							>
								Upload
							</Button>
						</label>
					</Grid>
					<Grid item xs={6}>
						{fileName && (
							<Typography noWrap className={classes.button}>
								{fileName}
							</Typography>
						)}
					</Grid>
					<Grid item xs={6}>
						<TextField
							value={formik.values.email}
							onChange={formik.handleChange}
							name="email"
							fullWidth
							type="email"
							id="outlined-basic"
							label="Email"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							onChange={formik.handleChange}
							value={formik.values.location}
							name="location"
							fullWidth
							type="text"
							id="outlined-basic"
							label="Location"
							variant="outlined"
						/>
					</Grid>
					<Grid item>
						<Button
							disabled={isLoading}
							type="submit"
							variant="contained"
							color="secondary"
							size="large"
							className={`${classes.button} ${classes.saveButton}`}
						>
							Save
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</form>
	);
}
